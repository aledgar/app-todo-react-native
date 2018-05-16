import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TextInput
          placeholder="Tarea:"
          style={styles.txtTarea}
          onChangeText={this.props.nombreTarea}
          onSubmitEditing={this.props.agregarTarea} 
          value={this.props.limpiarTarea}
        />
      </View> 
    )
  }
} 

const styles = StyleSheet.create({
  header:{ 
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center', 
  }, 
  txtTarea:{
    paddingHorizontal:16,
    fontSize:24
  },
}); 