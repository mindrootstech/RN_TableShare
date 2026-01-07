import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Images from '../../../assets';
import { StylesG } from '../../../utilities/stylesG';
import ButtonCustomOnBoarding from '../../components/buttonCustomOnBoarding';

const HomeTab = () => {
  return (
    <View style={StylesG.container}>
      <Text>HOME</Text>
      <Images.svgBasket />
      <ButtonCustomOnBoarding title="Next" />
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({});
