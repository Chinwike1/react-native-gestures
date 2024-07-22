import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { StyleSheet, Alert, View, Pressable } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export default function TapGesture() {
  const tap = Gesture.Tap()
    .onEnd(() => {
      Alert.alert('You tapped')
    })
    .runOnJS(true)

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      Alert.alert('You double tapped')
    })
    .runOnJS(true)

  return (
    <ThemedView style={styles.container}>
      <GestureDetector gesture={Gesture.Exclusive(doubleTap, tap)}>
        <Pressable
          style={({ pressed }) =>
            pressed ? [styles.box, styles.pressed] : styles.box
          }
        >
          <ThemedText style={styles.title}>Tap</ThemedText>
        </Pressable>
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
  boxContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  box: {
    width: 100,
    height: 100,
    padding: 10,
    backgroundColor: '#15c573',
    textAlign: 'center',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: '#dd2150',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})
