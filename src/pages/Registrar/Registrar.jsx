import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import { styles } from "./Registrar.style";

import { list, create, onCreate } from '../../services/todos';
import ButtonComponet from '../../components/Button';

export default function RegistrarScreen() {
const [todos, setTodos] = useState();
const [todo, setTodo] =  useState({
  
  nombre:"",
  descripcion:"",
  estaus:"",
  isbm:"",
  categoria:"",
  fechapublicacion:""

});
async function listTodos() {
    const todosFetched = await list();
    if(todosFetched) setTodos(todosFetched);
}

async function createTodo( 
  nombre,
  descripcion  ,
  estaus,
  isbm,
  categoria,
  fechapublicacion
  ) {
  const todosCreated = await create({ 
    nombre,
    descripcion , 
    estaus,
    isbm,
    categoria,
    fechapublicacion 
  });
  return todosCreated;
}


const addData =()=>{
  createTodo(todo.nombre, todo.descripcion, todo.estaus, todo.isbm, todo.categoria, todo.fechapublicacion);
}


useEffect(()=>{
  listTodos();
  let subscription;
  (async function suscribe() {
    subscription = await onCreate(listTodos);
  })();
  return ()=>{
    subscription?.unsubscribe();
  };
}, []);

    return(
      
      <View style={styles.container}>
          <Text style={{    
          textAlign: "center", fontWeight:"bold",marginBottom:7, fontSize: 23, color:"blue"
          }}
        >
          Registrar
        </Text>          
          <Text style={{ fontSize: 16  }} >Nombre</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, nombre:text}))} 
          
                      style={{
                        width:300, 
                        height: 40,
                        backgroundColor: "#c6c6c6", 
                        marginVertical:10, 
                        borderRadius:20,
                        
                      }}
          />
          
          <Text style={{ fontSize: 16  }} >Descripcion</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, descripcion: text}))}
            style={{
              width:300,
              height: 40, 
              backgroundColor: "#c6c6c6",              
              marginVertical:10,
              borderRadius:20,
              }}
          />
          <Text style={{ fontSize: 16  }} >Estatus</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, estaus: text}))}
            style={{
              width:300,
              height: 40, 
              backgroundColor: "#c6c6c6",              
              marginVertical:10,
              borderRadius:20,
              }}
          />
          <Text style={{ fontSize: 16  }} >Isbm</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, isbm: text}))}
            style={{
              width:300,
              height: 40, 
              backgroundColor: "#c6c6c6",              
              marginVertical:10,
              borderRadius:20,
              }}
          />
          
          <Text style={{ fontSize: 16  }} >categoria</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, categoria: text}))}
            style={{
              width:300,
              height: 40, 
              backgroundColor: "#c6c6c6",              
              marginVertical:10,
              borderRadius:20,
              }}
          />
            <Text style={{ fontSize: 16  }} >fecha publicacion</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, fechapublicacion: text}))}
            style={{
              width:300,
              height: 40, 
              backgroundColor: "#c6c6c6",              
              marginVertical:10,
              borderRadius:20,
              }}
          />
          
            
            <ButtonComponet  title='Create Todo' onPress={addData}/>

          {/* {todos &&
             todos.map((todo)=> <Text key={todo.id}> {`${todo.name} ${todo.description}`}</Text>)}
           */}





      </View>
    );
  }
  