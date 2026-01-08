import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageKey = {
  userInfo: 'kUserInfo',
  authToken: 'kAuthToken',
};

const setStorageValue = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch {
    // saving error
  }
};

const getStorageValue = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return value;
    }
    return null;
  } catch {
    // error reading value
    return null;
  }
};

const setStorageData = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch {
    // saving error
  }
};

const getStorageData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch {
    // error reading value
    return null;
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch {
    // clear error
  }
};

export {
  clearAll,
  getStorageData,
  getStorageValue,
  setStorageData,
  setStorageValue,
  StorageKey,
};
