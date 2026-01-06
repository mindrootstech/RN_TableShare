import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StylesG } from '../../../utilities/stylesG'
import { Fonts } from '../../../utilities/fonts'

const Home = () => {
  return (
    <View style={StylesG.container}>
      <Text style={{...Fonts.fontSFProTextBold64}}>HOME</Text>
      <Text style={{fontSize: 64}}>HOME</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})