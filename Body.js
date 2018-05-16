import React, { Component } from 'react'
import { Text, View, StyleSheet,FlatList, ActivityIndicator } from 'react-native'
import Tarea from './Tarea';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        {this.props.estado &&
          <ActivityIndicator
          size="large"
          color="#640064"
        />   
        }
        {!this.props.estado && 
          <FlatList
          data={this.props.datos}
          renderItem={({item})=><Tarea eliminar={this.props.eliminar} id={item.key} nombre={item.texto} />}
        />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
    body:{
        flex:2,
        backgroundColor:'#DAF7A6',
        justifyContent:'center',
        paddingHorizontal:16
    }
}) 