import React from 'react';
import {styles} from './styles.js';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ItemButton(props: {
  amount: number | null | undefined;
  onClick: ((event: GestureResponderEvent) => void) | undefined;
  img: ImageSourcePropType;
  name: string | null | undefined;
  price: string;
  count: number | undefined;
  state: string;
}) {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={
          props.amount === 0 ? styles.buttonDisabled : styles.buttonPressable
        }
        disabled={props.amount === 0 ? true : false}
        onPress={props.onClick}>
        <View style={styles.imageView}>
          <Image style={styles.tinyLogo} source={props.img} />
        </View>

        <View style={styles.infoView}>
          <Text style={styles.buttonname}>{props.name}</Text>
          <Text style={styles.buttonprice}>{props.price + '€'}</Text>
        </View>

        <View style={styles.amountView}>
          <Text style={styles.amount}>{props.amount}</Text>
        </View>
        <View style={styles.countView}>
          <Text style={styles.count}>{props.count} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default ItemButton;
