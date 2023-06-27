import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from '@rneui/base'
import { closeSession } from '../../utils/actions'


export default function Profile() {

 
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text>Profile</Text>
      <Button title={'cerrar sesion'} onPress={() => {closeSession()}}/>

    </View>
  )
}

const styles = StyleSheet.create({})