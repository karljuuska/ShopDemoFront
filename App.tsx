import React from 'react';
import Main from './src/components/main/view';
import {appstyles} from './AppStyle.js';
import {View} from 'react-native';

function App() {
  return (
    <View style={appstyles.app}>
      <Main />
    </View>
  );
}

export default App;
