import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View
      style={{
      flex:1
    }}>
      <View style={{
        flex:2,
      }}>
      <View style={{
        width:100,height:100,backgroundColor:'red' 
      }}>
      </View>
      </View>
      <View style={{
        flex:3,
        justifyContent:'flex-end',
        alignItems:'flex-end'
      }}>
      <View style={{
        width:100,height:100,backgroundColor:'blue'
        
      }}>
      </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})