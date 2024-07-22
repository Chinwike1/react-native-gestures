import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

const todoList = [
  { id: '1', text: 'Learn JavaScript' },
  { id: '2', text: 'Learn React' },
  { id: '3', text: 'Learn TypeScript' },
]

const Separator = () => <View style={styles.itemSeparator} />
const LeftSwipeActions = () => {
  return (
    <View
      style={{ flex: 1, backgroundColor: '#15c573', justifyContent: 'center' }}
    >
      <Text
        style={{
          color: '#000503',
          paddingHorizontal: 10,
          fontWeight: '600',
          padding: 20,
        }}
      >
        Bookmark
      </Text>
    </View>
  )
}
const rightSwipeActions = () => {
  return (
    <View
      style={{
        backgroundColor: '#dd2150',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}
    >
      <Text
        style={{
          color: '#fff',
          paddingHorizontal: 10,
          fontWeight: '600',
          padding: 30,
        }}
      >
        Delete
      </Text>
    </View>
  )
}
const swipeFromLeftOpen = () => {
  Alert.alert('Swipe from left')
}
const swipeFromRightOpen = () => {
  Alert.alert('Swipe from right')
}
const ListItem = ({ text }: { text: any }) => (
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    onSwipeableOpen={(direction) => {
      console.log(direction) // "left" | "right"
      direction === 'left' ? swipeFromLeftOpen() : swipeFromRightOpen()
    }}
  >
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: 'white',
      }}
    >
      <Text style={{ fontSize: 24 }}>{text}</Text>
    </View>
  </Swipeable>
)
const SwipeGesture = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 20,
            color: '#cdcdcd',
            fontSize: 20,
          }}
        >
          Swipe right or left
        </Text>
        <FlatList
          data={todoList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem {...item} />}
          ItemSeparatorComponent={() => <Separator />}
        />
      </SafeAreaView>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    flex: 1,
    height: 1,
    backgroundColor: '#444',
  },
})
export default SwipeGesture
