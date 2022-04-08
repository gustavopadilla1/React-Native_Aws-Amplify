import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import {styles} from "./Home.style";
// import ButtonComponet from '../../components/Button/Button.componet';
import { list, create, onCreate } from '../../services/todos';
import List from '../../components/List';

export default function HomeScreen(){
  
const [todos, setTodos] = useState();
const [todo] =  useState({

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
    descripcion  ,
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
          textAlign: "center", fontWeight:"bold",marginBottom:10, marginTop:15, fontSize: 20, color:"blue"
          }}
        >
             Lista  
        </Text>

        {/* <FlatList
          data={[todos]}
          renderItem={({todo})=>(
            <Text onPress={addData}>{todo.name}</Text>
          )}
        /> */}

 <View>
  {todos &&
   todos.map((todo)=> 
   <Text  onPress={addData} key={todo.id}  style={{marginBottom:10}}  >
    <List
    
      todo={todo}              
    /> 
             {/* {`${todo.name} ${todo.description}`}                        */}
    
    </Text> 
   )}                  
   </View>

      </View>
    );
  }




  