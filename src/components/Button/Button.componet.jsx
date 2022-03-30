import React from 'react'
import { styles } from './Button.style';
import {TouchableOpacity, Text}from 'react-native';

export default function ButtonComponet({
    onPress, 
    title ="Button",
    color ="green"
}) {

  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:color}]} 
    onPress={onPress}
    >

          <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
