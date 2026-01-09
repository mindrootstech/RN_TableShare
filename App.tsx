import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { LogBox, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import i18n from './src/i18n';
import Welcome from './src/screens/welcome';
import { Provider } from 'react-redux';
import reduxStore from './src/redux/reduxStore';

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider style={styles.container}>
      <Provider store={reduxStore}>
        <I18nextProvider i18n={i18n}>
          <Welcome />
        </I18nextProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
