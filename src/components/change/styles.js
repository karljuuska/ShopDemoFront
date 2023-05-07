import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    backgroundColor: 'rgb(212,251,211)',

    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 50,
  },

  button: {
    backgroundColor: 'rgb(179, 245, 179)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: '5%',
    marginTop: '5%',
  },

  textStyle: {
    color: 'rgb(41,65,101)',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  row: {
    alignItems: 'center',
  },

  rowname: {
    color: 'rgb(41,65,101)',
    fontSize: 22,
  },

  rowprice: {
    color: 'rgb(41,65,101)',
    fontSize: 28,
  },
});

export {styles};
