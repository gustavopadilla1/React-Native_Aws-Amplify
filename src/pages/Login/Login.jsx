import React  from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ButtonComponet from '../../components/Button/Button.componet';
import {Authenticator,Greetings} from 'aws-amplify-react-native';


import { styles } from './Login.style';

export default function Login({onPress}) {
    return(
        <View style={styles.container}>
          
   
<Text style={{ fontSize: 30, color:"black" }}>Bienvendo:</Text>
        

        <Authenticator hideDefault={true}>
    {/* <Greetings
        inGreeting={(username) => 'Hola: ' + username}
        outGreeting="Please sign in..."        
    />   */}            
    <Greetings/>    
</Authenticator>

<ButtonComponet title={"Iniciar"} onPress={onPress} color="blue"/>

        </View>
    );
}
