import React from 'react'
import { styles } from './List.style';
import {SafeAreaView, ScrollView, Text, View}from 'react-native';

 const List =({todo})=> {
    const { nombre,
      descripcion  ,
      estaus,
      isbm,
      categoria,
      fechapublicacion}=todo;

   
      


  return (
  <View>
  
        <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>        
        <Text style={styles.text}>Nombre:
            {nombre}
        </Text>
        <Text style={styles.text}>Descripcion:{descripcion}</Text>
        <Text style={styles.text}>Estatus:{estaus}</Text>
        <Text style={styles.text}>Isbm:{isbm}</Text>
        <Text style={styles.text}>Categoria:{categoria}</Text>
        <Text style={styles.text}>Fecha de Publicacion:{fechapublicacion}</Text>
      </ScrollView>
    </SafeAreaView>  
    </View>
  );
      }

export default List;