import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  PanGestureHandler,
  TapGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <PanGestureHandler
          onHandlerStateChange={e => {
            console.log('onHandlerStateChange', e.nativeEvent);
          }}
          onGestureEvent={e => {
            console.log('onGestureEvent', e.nativeEvent);
          }}>
          <View style={{height: 200, backgroundColor: 'tomato'}}>
            <Text>PanGestureHandler!</Text>
          </View>
        </PanGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
