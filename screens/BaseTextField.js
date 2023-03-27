import commonStyles, {sq} from './styles';
import React, {useState} from 'react';
import {
  black,
  ceruleanBlue,
  darkGrey10,
  darkGrey20,
  darkGrey40,
  darkGrey80,
  defaultBlack1,
  kristalBlue80,
  red100,
} from './colors';

import {
  View,
  Image,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const BaseTextField = ({
  heading,
  textInputStyle = [],
  label,
  value,
  error,
  disabled,
  placeholder,
  onChangeText,
  onEndEditing,
  keyboardType,
  containerStyle = [],
  showIcon,
  iconType,
  isSecureText,
  isError,
  maxLength,
  onTouchEnd,
  btnText,
  btnClick,
  autoCapitalize,
  multiline = false,
  noShadow = false,
  contextMenuHidden = false,
  onFocus,
  useDisabledBgColor = true,
  leadingText,
  endingText,
  customTextInputViewStyle = [],
  leadingTextStyle = [],
  separator = false,
  accessibilityLabel = '',
  isEditIcon = false,
  iconClick = () => {},
}) => {
  const [secureText, setSecureText] = useState(isSecureText);
  const [focused, setFocused] = useState(false);
  return (
    <View style={containerStyle}>
      {heading ? (
        <Text
          style={[
            commonStyles.text13m,
            commonStyles.mb4,
            isError ? {color: red100} : {color: darkGrey40},
          ]}>
          {heading}
        </Text>
      ) : null}
      <TouchableWithoutFeedback
        onPress={() => {
          if (onTouchEnd) {
            onTouchEnd();
          }
        }}>
        <View
          style={[
            commonStyles.borderRadius10,
            noShadow ? null : styles.shadow,
            {height: isError || focused ? sq * 43 : sq * 40},
            isError ? styles.errorBorder : focused ? styles.focusedBorder : [],
          ]}>
          <View
            style={[
              commonStyles.height40,
              commonStyles.borderRadius10,
              commonStyles.rowCenter,
              disabled && useDisabledBgColor
                ? commonStyles.backgroundKristalDarkYellow
                : commonStyles.backgroundWhite,
              leadingText ? commonStyles.pl16 : [],
              isError ? {color: red100} : [],
              ...customTextInputViewStyle,
            ]}>
            {leadingText ? (
              <Text
                style={[
                  commonStyles.text14b,
                  commonStyles.textDarkGrey20,
                  commonStyles.mr4,
                ]}>
                {leadingText}
              </Text>
            ) : null}
            {separator ? (
              <View>
                <Text
                  style={[
                    commonStyles.text20,
                    commonStyles.pl6,
                    commonStyles.pr6,
                    {color: darkGrey10},
                  ]}>
                  |
                </Text>
              </View>
            ) : null}
            <TextInput
              editable={!disabled}
              style={[
                commonStyles.textBold,
                commonStyles.height40,
                commonStyles.flex1,
                styles.textInput,
                disabled ? [commonStyles.borderRadius10] : [],
                !leadingText ? commonStyles.pl16 : [],
                ...textInputStyle,
              ]}
              label={label}
              onChangeText={text => onChangeText(text)}
              onEndEditing={text => {
                onEndEditing ? onEndEditing(text) : null;
              }}
              onFocus={() => {
                setFocused(true);
                if (onFocus) {
                  onFocus();
                }
              }}
              onBlur={() => setFocused(false)}
              value={value}
              placeholder={placeholder}
              selectionColor={black}
              placeholderTextColor={darkGrey20}
              keyboardType={keyboardType}
              secureTextEntry={secureText}
              maxLength={maxLength}
              autoCapitalize={autoCapitalize}
              onTouchEnd={() => (onTouchEnd ? onTouchEnd() : null)}
              multiline={multiline}
              contextMenuHidden={contextMenuHidden}
            />
            {endingText ? (
              <Text
                style={[
                  commonStyles.text14b,
                  commonStyles.textKristalBlue80,
                  commonStyles.mr16,
                  commonStyles.ml6,
                ]}>
                {`~ ${endingText} unit(s)`}
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
      {error ? (
        <Text
          style={[commonStyles.textRed100, commonStyles.mt6, commonStyles.ml8]}>
          {error}
        </Text>
      ) : null}
    </View>
  );
};
export default BaseTextField;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  focusedBorder: {
    borderWidth: 1.5,
    borderTopWidth: 1,
    borderColor: ceruleanBlue,
  },
  errorBorder: {
    borderWidth: 1.5,
    borderColor: red100,
  },
  textInput: {
    overflow: 'hidden',
    color: darkGrey80,
  },
  passwordToggleContainer: {
    position: 'absolute',
    zIndex: 999,
    right: 10,
    top: -32,
  },
  btnContainer: {
    position: 'absolute',
    zIndex: 999,
    right: 10,
    top: -32,
  },
  passwordToggleImage: {
    resizeMode: 'contain',
    height: 24,
    width: 24,
  },
  defaultImage: {
    position: 'absolute',
    zIndex: 999,
    resizeMode: 'contain',
    right: 10,
    top: -32,
    height: 24,
    width: 24,
  },
});
