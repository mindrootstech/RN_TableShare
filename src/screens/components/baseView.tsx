import React from 'react';
import { Platform, StyleSheet, View, ViewStyle } from 'react-native';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { ColorsApp } from '../../utilities/colors';
import CommonHeader, { CommonHeaderProps } from './commonHeader';
import { spaceLeftRight } from '../../common/constants';

type BaseViewProps = {
  children: React.ReactNode;
  showHeader?: boolean;
  contentContainerStyle?: ViewStyle;
  statusBarStyle?: SafeAreaViewProps['style'];
};

export default function BaseView({
  children,
  showHeader = false,
  statusBarStyle,
  contentContainerStyle,
  ...headerProps
}: BaseViewProps & CommonHeaderProps) {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={[styles.headerFooterStyle, statusBarStyle]}
    >
      <View style={[styles.container, contentContainerStyle]}>
        {showHeader && <CommonHeader {...headerProps} />}
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
    overflow: 'visible',
    backgroundColor: ColorsApp.theme,
  },
  headerFooterStyle: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
    paddingBottom: Platform.OS === 'android' ? 10 : 0,
    flex: 1,
    backgroundColor: ColorsApp.theme,
  },
});
