import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar,View } from 'react-native';

import Widget from './src/components/Widget';
import { theme } from './src/theme';

const App = () => {
  
  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />

      <Widget />
    </View>
  );
};

export default App;
