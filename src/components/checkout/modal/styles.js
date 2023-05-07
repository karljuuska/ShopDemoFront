import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    flex: 2,
  },

  input: {
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    height: '40%',
    width: '30%',
    marginBottom: '2%',
    borderWidth: 4,
    borderColor: 'rgb(41,65,101)',
    backgroundColor: 'rgb(236,246,251)',
    borderRadius: 5,
    color: 'rgb(41,65,101)',
    padding: 0,
  },

  entryView: {},
  centeredView: {},
  modalView: {
    flex: 1,
    margin: '10%',
    borderRadius: 20,
    shadowColor: '#000',
    backgroundColor: 'rgb(212,251,211)',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 50,
    elevation: 50,
  },

  flatList: {
    flex: 4 / 2,
    padding: '5%',
  },

  contentContainer: {
    paddingBottom: 30,
  },

  items: {
    flex: 1,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  rowCenter: {
    flex: 5 / 2,
    justifyContent: 'center',
  },

  rowline: {
    flex: 4 / 5,
    height: '50%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200, 200, 200)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgb(200, 200, 200)',
    justifyContent: 'center',
  },

  row: {
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
  },

  rowname: {
    marginRight: '2%',
    textAlign: 'center',
    alignSelf: 'center',

    fontSize: 22,
    color: 'rgb(41,65,101)',
  },

  rowprice: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 28,

    color: 'rgb(41,65,101)',
  },

  bottomContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  buttoncontainer: {
    padding: '4%',
    flexDirection: 'row',
    flex: 7 / 5,
  },

  btnResChkContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },

  btnreset: {
    alignSelf: 'flex-end',
    flex: 1,
    backgroundColor: 'rgb(228, 191, 162)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: '10%',
  },

  btncheckout: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgb(179, 245, 179)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: '10%',
    flexDirection: 'row',
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
    padding: '0%',
  },

  checkoutButtonView: {
    padding: '0%',
  },

  cartLogo: {
    flex: 1 / 2,
    aspectRatio: 1,
    marginRight: '5%',
  },
});

export {styles};
