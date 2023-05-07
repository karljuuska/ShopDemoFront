import React, {useReducer, useState} from 'react';
import {
  Alert,
  Modal,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ModuleButton from '../button';
import ErrorView from '../../error';
import {styles} from './styles';
import getImage from '../../../services/RequireImage';
import putRequest from '../../../services/putRequest';
import {ITEMS_URL} from '../../../res/URLs';

function ItemEntry(props: {
  counts: any[];
  offline: any;
  data: any[];
  visible: boolean | undefined;
  onPress: () => void;
}) {
  const forceUpdate = useReducer(x => x + 1, 0)[1]; //Bad
  const [stateErrorView, setStateErrorView] = useState(false);

  function resetFields() {
    for (let i = 0; i < props.counts.length; i++) {
      props.counts[i] = 0;
    }
    forceUpdate();
  }

  function changeCounter(i: number) {
    props.counts[i] = props.counts[i] + 1;
    forceUpdate();
  }

  const sendInconsumablesPutRequestt = () => {
    for (let i = 0; i < props.data.length; i++) {
      props.data[i].itemAmount = props.data[i].itemAmount + props.counts[i];
    }

    putRequest(props.data, ITEMS_URL).then(success => {
      if (!success) {
        setStateErrorView(!stateErrorView);
      }
    });

    resetFields();
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
            <FlatList
              style={styles.flatList}
              contentContainerStyle={styles.contentContainer}
              data={props.data}
              renderItem={({item, index}) => (
                <ModuleButton
                  name={item.itemName}
                  amount={item.itemAmount}
                  onClick={() => changeCounter(index)}
                  count={props.counts[index]}
                  img={getImage(item.itemName)}
                />
              )}
              numColumns={2}
            />
          </View>
          <View style={styles.buttoncontainer}>
            <View style={styles.closeButtonView}>
              <TouchableOpacity style={styles.btnclose} onPress={props.onPress}>
                <Text style={styles.btnclosetext}>CLOSE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.resetButtonView}>
              <TouchableOpacity style={styles.btnreset} onPress={resetFields}>
                <Text style={styles.btnresettext}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.checkoutButtonView}>
              <TouchableOpacity
                style={styles.btncheckout}
                onPress={() => {
                  props.onPress();
                  sendInconsumablesPutRequestt();
                }}>
                <Text style={styles.btncheckouttext}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <ErrorView
        visible={stateErrorView}
        onPress={() => {
          setStateErrorView(!stateErrorView);
        }}
      />
    </View>
  );
}

export default ItemEntry;
