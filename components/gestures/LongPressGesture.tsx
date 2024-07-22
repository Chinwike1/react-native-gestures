import { StyleSheet } from 'react-native'
import { ThemedView } from '../ThemedView'
import { ThemedText } from '../ThemedText'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export default function LongPressGesture() {
  const pressed = useSharedValue(false)

  const longPress = Gesture.LongPress()
    .minDuration(700)
    .onBegin(() => {
      pressed.value = true
    })
    .onFinalize(() => {
      pressed.value = false
    })
    .runOnJS(true)

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#ffb74b' : '#ff574b',
    transform: [{ scale: withTiming(pressed.value ? 1.3 : 1) }],
  }))

  return (
    <ThemedView style={styles.container}>
      <GestureDetector gesture={longPress}>
        <Animated.View style={[styles.box, animatedStyles]}>
          <ThemedText style={styles.title}>{'Long Press'}</ThemedText>
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
    width: 130,
    height: 130,
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
