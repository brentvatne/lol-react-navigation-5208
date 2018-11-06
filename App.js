import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import {
  PanGestureHandler,
  TapGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <PanGestureHandler
          onHandlerStateChange={e => {
            console.log('onHandlerStateChange', e);
          }}
          onGestureEvent={e => {
            console.log('onGestureEvent', e);
          }}>
          <View style={{height: 200, backgroundColor: 'tomato'}}>
            <Text>PanGestureHandler</Text>
          </View>
        </PanGestureHandler>
      </View>
    );
  }
}

export default createAppContainer(createDrawerNavigator({App}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
