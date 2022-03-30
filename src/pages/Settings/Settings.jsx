import React, { useEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native';
import { styles } from "./Settings.style";

// import { list, create, onCreate } from '../../services/todos';
import ButtonComponet from '../../components/Button';
import {Amplify} from "aws-amplify";



export default function SettingScreen() {
async function signOut(){
  try{
    await Amplify.Auth.signOut({gloobal:true});

  }catch(error){
    console.log(error);
  }
}

    return(
      <View style={styles.container}>
          {/* <Text>Setting Screen</Text> */}
          
          <Text style={{ fontSize: 20, marginBottom: 25, color:"blue" }} > Name</Text>
          <Text style={{ fontSize: 16, marginBottom: 25, color:"black" }}> Jose Gustavo Padilla Torres</Text>
          <Text style={{ fontSize: 20, marginBottom: 25, color:"blue" }} >Correo</Text>
          <Text style={{ fontSize: 16, marginBottom: 25, color:"black" }}>josegustavopadillatorres@gmail.com</Text>
          <Text style={{ fontSize: 20, marginBottom: 25, color:"blue" }} >Telefono</Text>
          <Text style={{ fontSize: 16, marginBottom: 25, color:"black" }}>+52 449-345-0656</Text>


          {/* <TextInput onChangeText={(text)=> setTodo(current =>({...current, name:text}))} 
                      style={{width:100, height: 50, backgroundColor: "gray"}}
          />
           */}
              <ButtonComponet title='signOut' onPress={signOut}/>
      </View>
    );
  }
  