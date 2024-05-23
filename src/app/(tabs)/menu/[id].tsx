import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const ProductItem = () => {
  const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>ProductItem : {id}</Text>
    </View>
  )
}

export default ProductItem