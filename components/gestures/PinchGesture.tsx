import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { ThemedText } from '../ThemedText'

export default function PinchGesture() {
  const scale = useSharedValue(1)
  const startScale = useSharedValue(0)

  const pinch = Gesture.Pinch()
    .onStart(() => {
      startScale.value = scale.value
    })
    .onUpdate((event) => {
      scale.value = startScale.value * event.scale
    })
    .runOnJS(true)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={pinch}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <ThemedText style={styles.title}>Pinch</ThemedText>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#b58df1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
