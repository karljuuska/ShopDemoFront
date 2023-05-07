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

function ErrorView(props: {
  visible: boolean;
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
              <Text style={styles.rowname}>Oops, Error</Text>
              <Text style={styles.rowprice}>404</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ErrorView;
