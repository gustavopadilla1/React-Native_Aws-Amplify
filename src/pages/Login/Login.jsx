import React  from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ButtonComponet from '../../components/Button/Button.componet';

import { styles } from './Login.style';

export default function Login({onPress}) {
    return(
        <View style={styles.container}>
          <StatusBar/>
          <Text style={{ fontSize: 30, marginBottom: 35, color:"black" }}>Bienvendo</Text>
          {/* <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity> */}
        
        <ButtonComponet title={"Iniciar"} onPress={onPress} color="blue"/>

        </View>
    );
}
