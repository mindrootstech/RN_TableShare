import React from 'react';
import { ViewStyle } from 'react-native';
import { Animation, CustomAnimation } from 'react-native-animatable';
import Modal from 'react-native-modal';

type IModalCommonProps = {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerModal?: ViewStyle;
  avoidKeyboard?: boolean;
  animationIn?: Animation | CustomAnimation;
  animationOut?: Animation | CustomAnimation;
  backdropOpacity?: number;
};

const ModalCommon: React.FC<IModalCommonProps> = ({
  isVisible,
  onClose,
  children,
  avoidKeyboard = true,
  animationIn = 'slideInUp',
  animationOut = 'slideOutDown',
  backdropOpacity = 0.5,
  containerModal,
  ...restProps
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      avoidKeyboard={avoidKeyboard}
      animationIn={animationIn}
      animationOut={animationOut}
      backdropOpacity={backdropOpacity}
      style={containerModal}
      useNativeDriver
      {...restProps}
    >
      {children}
    </Modal>
  );
};

export default ModalCommon;
