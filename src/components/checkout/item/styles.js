import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: '2%',
    margin: '2%',
    marginBottom: 0,
    backgroundColor: 'rgb(179, 245, 179)',
    borderRadius: 5,
    flexDirection: 'row',
  },

  buttonDisabled: {
    flex: 1,
    padding: '2%',
    margin: '2%',
    marginBottom: 0,
    borderRadius: 5,
    flexDirection: 'row',

    color: 'rgba(128, 128, 128, 0.466)',
    backgroundColor: 'rgb(194, 194, 194)',
    opacity: 0.4,
    filter: 'alpha(opacity=40)',
  },

  buttonPressable: {
    backgroundColor: 'rgb(211, 244, 163)',
    alignItems: 'center',
    width: '100%',
  },

  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinyLogo: {
    width: 50,
    height: 50,
    overflow: 'hidden',
  },

  amountView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    aspectRatio: 1,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200, 200, 200)',
  },

  amount: {
    textAlign: 'center',
    color: 'rgb(41,65,101)',
  },

  countEnd: {
    flex: 1,
    flexDirection: 'column',
  },

  countView: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    flex: 1,
    flexDirection: 'column',
    aspectRatio: 1,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200, 200, 200)',
  },

  count: {
    textAlign: 'center',
    color: 'rgb(41,65,101)',
    fontWeight: 'bold',
  },

  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(200, 200, 200)',
  },

  buttonname: {
    //flex: 1,
    color: 'rgb(41,65,101)',
    textAlign: 'center',
  },
});

export {styles};
