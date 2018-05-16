import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import Header from './Header';
import Body from './Body';
import { setTimeout } from 'core-js';
     
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      tarea:[], 
      nombreTarea:"",
      estado:true
    }
  }
 

  componentDidMount(){
    
    this.getTareas();   
  }

  setNombreTarea = (value) =>{   
    console.log(":"+value);
    this.setState({
      nombreTarea:value  
    });   
  }
  
  setTarea = () =>{
    // console.log("Enviado tarea "+this.state.nombreTarea);
    const tareaNueva = [...this.state.tarea, {texto:this.state.nombreTarea, key:Date.now()}];
    this.saveTareas(tareaNueva); 
    this.setState({
      tarea: tareaNueva,
      nombreTarea:""    
    }); 
  }          

  deleteTarea = (id) =>{
    const nuevasTareas = this.state.tarea.filter((elemento)=>{
      return elemento.key!==id;
    });
    this.saveTareas(nuevasTareas);
    this.setState({  
      tarea:nuevasTareas
    });  
  }

  saveTareas = (tareas) =>{
    AsyncStorage.setItem('@appToDo:tareas',JSON.stringify(tareas))
    .then((valor)=>{
      console.log(valor);
    }) 
    .catch((e)=>{    
      console.log(e); 
    })
  }
 
  getTareas = () =>{ 
    AsyncStorage.getItem('@appToDo:tareas')
    .then((valor)=>{                 
      if(valor!==null){             
        const nuevasTareas = JSON.parse(valor);     
        setTimeout(()=>{ 
          this.setState({
            estado:false
          })
        },5000)
        this.setState({
          tarea:nuevasTareas
        })        
      }
    }) 
    .catch((e)=>{    
      console.log(e);
    })
  }

  render() {  
    return (
      <View style={styles.container}>
        <Header  
          nombreTarea={this.setNombreTarea} 
          agregarTarea={this.setTarea} 
          limpiarTarea={this.state.nombreTarea}
          />
        <Body 
          datos={this.state.tarea}
          eliminar={this.deleteTarea}
          estado={this.state.estado}
          />
      </View> 
    );       
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },  
  txt:{
    paddingHorizontal:16, 
    fontSize:24,
    color:"green"
  }
});
