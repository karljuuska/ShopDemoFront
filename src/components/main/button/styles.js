import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '33.333%',
    //flex: 1,
    padding: '2%',
  },

  buttonPressable: {
    backgroundColor: 'rgb(179, 245, 179)',
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonDisabled: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    color: 'rgba(128, 128, 128, 0.466)',
    backgroundColor: 'rgb(194, 194, 194)',
    opacity: 0.4,
    filter: 'alpha(opacity=40)',
  },

  imageView: {
    flex: 1,
    marginTop: '2%',
    borderRadius: 5,
    width: '96%',

    aspectRatio: 1.1,

    backgroundColor: 'rgb(236,246,251)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: '75%',
    height: '75%',
    resizeMode: 'contain',
  },

  amountView: {
    position: 'absolute',
    left: '1%',
    top: '0%',
    width: '20%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'rgb(179, 245, 179)',
    aspectRatio: 1,
  },

  amount: {
    textAlign: 'center',
    color: 'rgb(41,65,101)',
    fontWeight: 'bold',
  },

  countView: {
    position: 'absolute',
    left: '79%',
    top: '0%',
    width: '20%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'rgb(179, 245, 179)',
    aspectRatio: 1,
  },

  count: {
    textAlign: 'center',
    color: 'rgb(41,65,101)',
    fontWeight: 'bold',
  },

  buttonname: {
    color: 'rgb(41,65,101)',
    fontSize: 14,
  },

  buttonprice: {
    color: 'rgb(41,65,101)',
    fontSize: 17,
  },

  infoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {styles};
