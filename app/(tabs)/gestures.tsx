import { StyleSheet } from 'react-native'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import PanGesture from '@/components/gestures/PanGesture'
import TapGesture from '@/components/gestures/TapGesture'
import SwipeGesture from '@/components/gestures/SwipeGesture'
import LongPressGesture from '@/components/gestures/LongPressGesture'
import PinchGesture from '@/components/gestures/PinchGesture'

export default function App() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Gestures Screen</ThemedText>
      <PanGesture />
      {/* <TapGesture /> */}
      {/* <SwipeGesture /> */}
      {/* <LongPressGesture /> */}
      {/* <PinchGesture /> */}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 50,
    paddingHorizontal: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#dd2150',
    borderRadius: 20,
  },
})
