import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CommonHeader from '../../components/commonHeader';
import GradientView from '../../components/gradientView';

import HighlightedText, { Highlight } from 'react-native-highlighter';
import Images from '../../../assets';
import {
  activeOpacityTouchable,
  spaceLeftRight,
} from '../../../common/constants';
import { ColorsApp } from '../../../utilities/colors';
import { Fonts } from '../../../utilities/fonts';
import ButtonCustom from '../../components/buttonCustom';
import TextInputCustom from '../../components/textInputCustom';

const AddNewStore = () => {
  const [form, setForm] = useState({
    businessName: '',
    description: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zip: '',
    phone: '',
  });

  const textHighlight = `Note : Your application is being reviewed. you can add products now, but they won’t be visible to customers until approved.`;
  const mainKeywords = new Highlight({
    keywords: ['Note :'],
    style: {
      ...Fonts.fontNotoSansSemiBold9,
      color: ColorsApp.orangeBurnt,
    },
    onPress: () => {},
  });

  const onChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <GradientView>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.scrollContent}
          >
            <CommonHeader title="Become a Vendor" />

            {/* STORE LOGO */}
            <View style={styles.containerStoreLogo}>
              <Text style={styles.txtStoreLogo}>Store Logo</Text>

              <View style={styles.containerLogo}>
                <TouchableOpacity
                  activeOpacity={activeOpacityTouchable}
                  style={styles.containerUploadLogo}
                >
                  <Images.svgUpload />
                  <Text style={styles.txtUploadLogo}>Upload Logo</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* FORM */}
            <View style={styles.containerForm}>
              <TextInputCustom
                label="Business Name *"
                placeholder="e.g Sweet Meadows Apiary"
                value={form.businessName}
                onChangeText={(text) => onChange('businessName', text)}
              />

              <TextInputCustom
                label="Business Description *"
                placeholder="Tell customers about your business, products, and what make you special..."
                value={form.description}
                onChangeText={(text) => onChange('description', text)}
                multiline
                numberOfLines={4}
                inputStyle={styles.textArea}
              />

              <TextInputCustom
                label="Full Street Address *"
                placeholder="Enter your address"
                value={form.address}
                onChangeText={(text) => onChange('address', text)}
              />

              {/* CITY & STATE */}
              <View style={styles.containerLocation}>
                <View style={styles.flex}>
                  <TextInputCustom
                    label="City *"
                    placeholder="Enter city name"
                    value={form.city}
                    onChangeText={(text) => onChange('city', text)}
                  />
                </View>

                <View style={styles.flex}>
                  <TextInputCustom
                    label="State *"
                    placeholder="Enter state name"
                    value={form.state}
                    onChangeText={(text) => onChange('state', text)}
                  />
                  <Images.svgArrowDown style={styles.iconArrowDown} />
                </View>
              </View>

              {/* COUNTRY & ZIP */}
              <View style={styles.containerLocation}>
                <View style={styles.flex}>
                  <TextInputCustom
                    label="Country *"
                    placeholder="Enter country name"
                    value={form.country}
                    onChangeText={(text) => onChange('country', text)}
                  />
                  <Images.svgArrowDown style={styles.iconArrowDown} />
                </View>

                <View style={styles.flex}>
                  <TextInputCustom
                    label="Zip Code *"
                    placeholder="Enter your zipcode"
                    keyboardType="number-pad"
                    value={form.zip}
                    onChangeText={(text) => onChange('zip', text)}
                  />
                </View>
              </View>
              <TextInputCustom
                label="Phone Number *"
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                value={form.phone}
                onChangeText={(text) => onChange('phone', text)}
              />
            </View>

            <View style={styles.containerNote}>
              <HighlightedText
                highlights={[mainKeywords]}
                style={styles.containerNotetxt}
              >
                {textHighlight}
              </HighlightedText>
            </View>
            <ButtonCustom title="Done" style={styles.btnDone} />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </GradientView>
  );
};

export default AddNewStore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spaceLeftRight,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  containerStoreLogo: {
    marginTop: 20,
  },
  txtStoreLogo: {
    ...Fonts.fontNotoSansMedium12,
  },
  containerLogo: {
    marginTop: 7,
    height: 104,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: ColorsApp.grayE9,
    backgroundColor: ColorsApp.white,
  },
  containerUploadLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
    width: 97,
    borderRadius: 25,
    backgroundColor: ColorsApp.green,
    justifyContent: 'center',
  },
  txtUploadLogo: {
    ...Fonts.fontNotoSansMedium10,
    color: ColorsApp.theme,
  },
  containerForm: {
    marginTop: 15,
    gap: 15,
  },
  containerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  flex: {
    flex: 1,
  },
  iconArrowDown: {
    position: 'absolute',
    bottom: 17,
    right: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 10,
  },
  containerNote: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.4,
    borderRadius: 4,
    borderColor: ColorsApp.orangeFD,
    backgroundColor: ColorsApp.orangeLight,
  },
  containerNotetxt: {
    ...Fonts.fontNotoSansLight9,
    color: ColorsApp.orangeBurnt,
  },
  btnDone: {
    marginTop: 43,
  },
});
