import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import {styles} from './styles.js';

function Item(props: {
  amount: number;
  img: ImageSourcePropType;
  name: string;
  count: number;
}) {
  return (
    <View style={props.amount === 0 ? styles.buttonDisabled : styles.button}>
      <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo} source={props.img} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.buttonname}>{props.name}</Text>
      </View>
      <View style={styles.amountView}>
        <Text style={styles.amount}>{props.amount}</Text>
      </View>
      <View style={styles.countEnd}>
        <View style={styles.countView}>
          <Text style={styles.count}>{props.count} </Text>
        </View>
      </View>
    </View>
  );
}

export default Item;
