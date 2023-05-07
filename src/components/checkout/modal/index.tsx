import React, {useState} from 'react';
import {
  Alert,
  Modal,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import ChangeView from '../../change';
import ErrorView from '../../error';
import {styles} from './styles';
import getImage from '../../../services/RequireImage';
import Item from '../item';
import putRequest from '../../../services/putRequest';
import {ITEMS_URL} from '../../../res/URLs';

function CheckoutView(props: {
  total: number;
  counts: number[];
  data: any[];
  onPress: () => void;
  visible: boolean;
}) {
  const [text, onChangeText] = React.useState('');
  const [stateChangeView, setStateChangeView] = useState(false);
  const [stateErrorView, setStateErrorView] = useState(false);

  const [change, setChange] = useState(0);

  function calculateChange() {
    if (text === '') {
      setChange(0 - props.total);
    } else {
      setChange(parseFloat(text) - props.total);
    }
  }

  const sendPutRequest = () => {
    //First get all items and with .then() do the subtractions
    for (let i = 0; i < props.data.length; i++) {
      props.data[i].itemAmount = props.data[i].itemAmount - props.counts[i];
    }

    putRequest(props.data, ITEMS_URL).then(success => {
      if (success) {
        calculateChange();
        onChangeText('');
        setStateChangeView(!stateChangeView);
      } else {
        onChangeText('');
        setStateErrorView(!stateErrorView);
      }
    });
  };

  return (
    <View style={styles.entryView}>
      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.modalView}>
          <View style={styles.items}>
            <ScrollView
              style={styles.flatList}
              contentContainerStyle={styles.contentContainer}>
              <View>
                {props.data.map(
                  (
                    item: {
                      itemName: string;
                      itemAmount: number;
                    },
                    index: number,
                  ) => {
                    return (
                      <Item
                        key={index}
                        name={item.itemName}
                        amount={item.itemAmount}
                        count={props.counts[index]}
                        img={getImage(item.itemName)}
                      />
                    );
                  },
                )}
              </View>
            </ScrollView>

            <View style={styles.bottomContainer}>
              <View style={styles.rowCenter}>
                <View style={styles.rowline}>
                  <View style={styles.row}>
                    <Text style={styles.rowname} adjustsFontSizeToFit>
                      TOTAL
                    </Text>
                    <Text style={styles.rowprice} adjustsFontSizeToFit={true}>
                      {props.total.toFixed(2)}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  value={text}
                  placeholder="VALUE"
                  placeholderTextColor={'grey'}
                  onChangeText={onChangeText}
                  keyboardType="number-pad"
                />
              </View>
              <View style={styles.buttoncontainer}>
                <View style={styles.btnResChkContainer}>
                  <View style={styles.resetButtonView}>
                    <TouchableOpacity
                      style={styles.btnreset}
                      onPress={() => {
                        onChangeText('');
                        props.onPress();
                      }}>
                      <Text style={styles.btnresettext}>CANCEL</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.checkoutButtonView}>
                    <TouchableOpacity
                      style={styles.btncheckout}
                      onPress={() => {
                        sendPutRequest();
                        props.onPress();
                      }}>
                      <Image
                        style={styles.cartLogo}
                        source={getImage('Cart')}
                      />
                      <Text style={styles.btncheckouttext}>CHECKOUT</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <ChangeView
        visible={stateChangeView}
        change={change}
        onPress={() => {
          setStateChangeView(!stateChangeView);
        }}
      />
      <ErrorView
        visible={stateErrorView}
        onPress={() => {
          setStateErrorView(!stateErrorView);
        }}
      />
    </View>
  );
}

export default CheckoutView;
