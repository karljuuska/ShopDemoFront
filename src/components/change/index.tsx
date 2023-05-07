import React from 'react';
import {
  Alert,
  Modal,
  Text,
  View,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import {styles} from './styles';

function ChangeView(props: {
  visible: boolean;
  change: number;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}) {
  return (
    <View>
      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.row}>
              <Text style={styles.rowname}>Change</Text>
              <Text style={styles.rowprice}>{props.change.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPressOut={props.onPress}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ChangeView;
