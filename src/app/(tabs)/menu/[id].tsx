import Button from "@/components/CustomButton";
import { View } from "@/components/Themed";
import products from "@assets/data/products";
import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, SafeAreaView, Text, StyleSheet, Pressable } from "react-native";

const ProductItem = () => {

  const [selected, setselected] = useState("M")

  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id.toString() === id);
  const defaultImage ="https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

  const sizes = ["S", "M", "L", "XL"];

  const addTocart = () => {
    console.warn("Added to cart " + selected);
  };

  if (!product) {
    return (
      <SafeAreaView>

        <Text>Product not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name}} />
      <Image source={{ uri: product.image || defaultImage }}
        style={styles.image}
        resizeMode="contain"
        />

      <Text>Select size</Text>
      <View style={styles.sizes}>
      {sizes.map(s => (
      <Pressable 
      style={[styles.size, {backgroundColor: selected === s ? "gainsboro" : "white"}]}
      key={s}
      onPress={() => {setselected(s)}}
      >
          <Text style={[styles.sizeText, {color: selected === s ? "black" : "gray"}]}>{s}</Text>
      </Pressable>
      ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" onPress={addTocart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  subtitle: {
    marginVertical: 10,
    fontWeight: "600",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: "auto",
  },

  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default ProductItem;
