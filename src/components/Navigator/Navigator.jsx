import React,{useContext} from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
 
import LoginScreen from '../../pages/Login';
import SettingScreen from '../../pages/Settings';
import HomeScreen from '../../pages/Home';
import RegistrarScreen from '../../pages/Registrar';

import { GlobalContext } from '../../context/global/global.context';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function ManiNavigator(){
    const {state,login, logout} = useContext(GlobalContext);
    // console.log({state});
    
  return (
   <NavigationContainer>
     {!state.user ?(
        <Stack.Navigator>
          <Stack.Screen
          options={{headerShown: false}}
          children={(props)=>(
            <LoginScreen {...props} onPress={()=>login()}/>
          )}
          name ="Login"
          />
        </Stack.Navigator>
     ):
     (
      
     <Tab.Navigator 
     screenOptions={({route})=>({
       tabBarIcon:({focused, color, size})=>{
         let iconName;


         
         if(route.name === "list"){          
           iconName = "ios-list"
         }else if (route.name === "Registrar") {
          iconName = "ios-add"           
         }
         else if(route.name ==="profile"){
          iconName = focused
           ? "ios-information-circle"
           : "ios-information-circle-outline";
         }
         return<Ionicons name={iconName} size={40 } color={color}/>
       },
       tabBarActiveTintColor:"blue",
       tabBarInactiveTintColor:"gray",
     }) }
     >
       <Tab.Screen name='list' component={HomeScreen} />
        <Tab.Screen name='Registrar' component={RegistrarScreen}/>       


       <Tab.Screen name='profile'
        children={(props)=>(
          <SettingScreen {...props} onPress={()=>logout()}/>
        )}
        />       
     
     
     </Tab.Navigator>
     )}
   </NavigationContainer>
  );
}