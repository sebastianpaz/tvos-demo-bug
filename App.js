/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 70,
    left: 10,
    height: 800,
    bottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    right: 10,
  },
});

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 72, color: 'black'}}>Video test</Text>
      <Video
        source={{
          uri: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        }}
        hls
        resizeMode="contain"
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default App;
