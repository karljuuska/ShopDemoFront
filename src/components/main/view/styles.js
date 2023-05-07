import {StyleSheet} from 'react-native';

const usersstyles = StyleSheet.create({
  containerView: {
    backgroundColor: 'rgb(230,251,211)',
    flex: 1,
    flexDirection: 'column',
  },

  buttonsView: {
    flex: 7 / 2.3,
  },

  flatList: {
    padding: 5,
  },

  offlinePrompt: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  bottomContainer: {
    justifyContent: 'flex-end',
    flex: 1,
  },

  rowCenter: {
    flex: 1,
    justifyContent: 'center',
  },

  rowline: {
    //flex: 1,
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
  },

  rowname: {
    alignSelf: 'center',
    fontSize: 22,
    marginRight: '2%',
    color: 'rgb(41,65,101)',
  },

  rowprice: {
    alignSelf: 'center',
    fontSize: 28,
    color: 'rgb(41,65,101)',
  },

  buttoncontainer: {
    height: '50%',
    padding: '4%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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

  btnentry: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgb(179, 245, 179)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
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

  btnentrytext: {
    color: 'rgb(41,65,101)',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  cartLogo: {
    flex: 1 / 2,
    aspectRatio: 1,
    marginRight: '5%',
  },

  entryButtonView: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  resetButtonView: {
    padding: '0%',
  },

  checkoutButtonView: {
    padding: '0%',
  },
});

export {usersstyles};
