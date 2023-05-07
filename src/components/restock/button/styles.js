import {StyleSheet} from 'react-native';

const modulebuttonstyles = StyleSheet.create({
  button: {
    width: '50%',
    padding: '2%',
  },

  buttonPressable: {
    backgroundColor: 'rgb(179, 245, 179)',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonDisabled: {
    color: 'rgba(128, 128, 128, 0.466)',
    backgroundColor: 'rgb(194, 194, 194)',
    opacity: 0.4,
    filter: 'alpha(opacity=40)',
  },

  imageView: {
    marginTop: '5%',
    width: '85%',
    borderRadius: 5,
    aspectRatio: 1,
    backgroundColor: 'rgb(236,246,251)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 75,
    height: 75,
  },

  amountView: {
    position: 'absolute',
    left: '2%',
    top: '0%',
    width: '20%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 5,
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
    left: '78%',
    top: '0%',
    width: '20%',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 5,
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
    padding: '2%',
  },
});

export {modulebuttonstyles};
