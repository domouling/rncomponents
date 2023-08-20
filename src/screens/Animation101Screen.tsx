/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';

export const Animation101Screen = () => {

  const { opacity, fadeIn, fadeOut, position, startMovingPosition } = useAnimation();

  return (
    <View style={ styles.container }>
        <Animated.View style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{
            translateY: position,
          }],
        }} />

        <Button
          title="Fade In"
          onPress={ () => {
            fadeIn();
            startMovingPosition(-100, 800);
          }}
        />

        <Button
          title="Fade Out"
          onPress={ fadeOut }
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
      backgroundColor: '#5856D6',
      width: 150,
      height: 150,
  },
});
