import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Colors from '../constants/Colors';
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
    product: Product;
    };


const ProductListItem = ({ product }: ProductListItemProps) => {
    const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'
return (
    <Link href={`/(tabs)/menu/${product.id}`} asChild> {/* le (tabs) n'est pas necessaire */}
    <Pressable style={styles.container}>
        <Image
        source={{ uri: product.image || defaultImage}}
        style={styles.image}
        resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </Pressable>
    </Link>
)};

const styles = StyleSheet.create({
container: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    overflow: "hidden",
    flex: 1, //important for aspect ratio
    maxWidth: "50%", //important for aspect ratio

  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
    marginTop: "auto",
  },
});

export default ProductListItem;
