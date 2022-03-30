import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import { styles } from "./Registrar.style";

import { list, create, onCreate } from '../../services/todos';
import ButtonComponet from '../../components/Button';

export default function RegistrarScreen() {
const [todos, setTodos] = useState();
const [todo, setTodo] =  useState({name:"", description:""});
async function listTodos() {
    const todosFetched = await list();
    if(todosFetched) setTodos(todosFetched);
}

async function createTodo(name, description) {
  const todosCreated = await create({name, description});
  return todosCreated;
}


const addData =()=>{
  createTodo(todo.name, todo.description);
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
          <Text  style={{ fontSize: 30, marginBottom: 35, color:"blue" }}  >Registrar Libro</Text>
          
          <Text style={{ fontSize: 16  }} >Titulo</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, name:text}))} 
          
                      style={{
                        width:300, 
                        height: 50,
                        backgroundColor: "#c6c6c6", 
                        marginVertical:30, 
                        borderRadius:20,
                        
                      }}
          />
          
          <Text style={{ fontSize: 16  }} >Autor</Text>
          <TextInput onChangeText={(text)=> setTodo(current =>({...current, description: text}))}
            style={{
              width:300,
              height: 50, 
              backgroundColor: "#c6c6c6",              
              marginVertical:30,
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
  