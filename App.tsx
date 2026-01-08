import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { LogBox, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import i18n from './src/i18n';
import AuthNavigation from './src/navigation/AuthNavigation';
import Welcome from './src/screens/welcome';
import { Provider } from 'react-redux';
import store from './src/redux/store';

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <I18nextProvider i18n={i18n}>
            <Welcome />
            {/* <AuthNavigation /> */}
          </I18nextProvider>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
