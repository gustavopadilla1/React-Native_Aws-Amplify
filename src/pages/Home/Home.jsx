import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {styles} from "./Home.style";
// import ButtonComponet from '../../components/Button/Button.componet';
import { list, create, onCreate } from '../../services/todos';

export default function HomeScreen(){
  
const [todos, setTodos] = useState();
const [todo] =  useState({name:"", description:""});

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

        <Text style={{marginBottom:10, marginTop:15, fontSize: 22, color:"blue"}}>Lista de Libros </Text>

        
        {/* <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity> */}
            <View >
            {todos &&
             todos.map((todo)=> 
             <Text style={styles.list}   onPress={addData} key={todo.id}>
               
               <Text style={styles.Titulo}>Titulo:</Text>
                      {`${todo.name}`}                       
                      
              <Text style={styles.Autor} >Autor:</Text>
                      {` ${todo.description}`}                       
                      
             </Text>              

             )}
            </View>
        
      </View>
    );
  }