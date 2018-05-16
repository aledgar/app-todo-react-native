import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Tarea extends Component {
  render() {
    return (
      <View style={styles.estilotexto}>
        <Text style={styles.texto}> {this.props.nombre} </Text>
        <TouchableOpacity
          onPress={()=>{this.props.eliminar(this.props.id)}}
        >
          <Ionicons
              name="md-trash"
              size={24}
              color="gray"
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    texto:{
        fontSize:24,
        paddingHorizontal:11,
        paddingRight:10,
        color:"#000"
    }, 
    estilotexto:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between', 
      alignItems:'center' 
    }
})