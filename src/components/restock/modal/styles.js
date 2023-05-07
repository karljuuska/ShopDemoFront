import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  entryView: {},
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(100, 0, 0, 0.5)',
  },

  modalView: {
    margin: '10%',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    backgroundColor: 'rgb(212,251,211)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 50,
    flex: 1,
  },

  flatList: {
    padding: '5%',
    marginTop: 0,
  },

  contentContainer: {
    paddingBottom: 30,
  },

  items: {
    flex: 5 / 2,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    textAlign: 'center',
  },

  buttoncontainer: {
    padding: '10%',
    flexDirection: 'row',
    flex: 1 / 3,
  },

  btnreset: {
    flex: 1,
    backgroundColor: 'rgb(228, 191, 162)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: '5%',
  },

  btncheckout: {
    flex: 1,

    backgroundColor: 'rgb(179, 245, 179)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: '5%',
  },

  btnclose: {
    flex: 1,
    backgroundColor: 'rgb(228, 191, 162)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },

  btnresettext: {
    color: 'rgb(41,65,101)',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  btncheckouttext: {
    color: 'rgb(41,65,101)',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  btnclosetext: {
    color: 'rgb(41,65,101)',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  closeButtonView: {
    padding: '2%',
  },

  resetButtonView: {
    padding: '2%',
  },

  checkoutButtonView: {
    padding: '2%',
  },
});

export {styles};
