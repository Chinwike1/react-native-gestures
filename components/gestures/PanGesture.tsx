import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React, { useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export default function PanGesture() {
  const translationX = useRef(new Animated.Value(0)).current
  const translationY = useRef(new Animated.Value(0)).current

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      translationX.setValue(event.translationX)
      translationY.setValue(event.translationY)
    })
    .onEnd((event) => {
      Animated.spring(translationX, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
      Animated.spring(translationY, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    })
    .runOnJS(true)

  return (
    <ThemedView style={styles.container}>
      <GestureDetector gesture={pan}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [
                { translateX: translationX },
                { translateY: translationY },
              ],
            },
          ]}
        >
          <ThemedText style={styles.title}>Pan</ThemedText>
        </Animated.View>
      </GestureDetector>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#dd2150',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
