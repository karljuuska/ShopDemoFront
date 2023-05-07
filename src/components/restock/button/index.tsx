import React from 'react';
import {modulebuttonstyles} from './styles.js';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ModuleButton(props: {
  onClick: ((event: GestureResponderEvent) => void) | undefined;
  img: ImageSourcePropType;
  name:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  amount:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
  count:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <View style={modulebuttonstyles.button}>
      <TouchableOpacity
        style={modulebuttonstyles.buttonPressable}
        onPress={props.onClick}>
        <View style={modulebuttonstyles.imageView}>
          <Image style={modulebuttonstyles.tinyLogo} source={props.img} />
        </View>
        <Text style={modulebuttonstyles.buttonname}>{props.name}</Text>
        <View style={modulebuttonstyles.amountView}>
          <Text style={modulebuttonstyles.amount}>{props.amount}</Text>
        </View>
        <View style={modulebuttonstyles.countView}>
          <Text style={modulebuttonstyles.count}>{props.count} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default ModuleButton;
