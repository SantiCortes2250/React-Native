import { View, Text, TextInput, StyleSheet, TouchableOpacity  } from 'react-native'
import React, {useState} from 'react'
import Layout from '../components/Layout'
import { saveTask } from '../api'


const TaskFormScreen = ({navigation}) => {


  const [task, setTasks] = useState({
    title: '',
    description: ''
  })

  const handleChange = (name, value) => setTasks({...task, [name]:value})

  const handleSubmit = () =>{
    saveTask(task)
    navigation.navigate('HomeScreen')


  }

  

  return (
    <Layout>
      <TextInput style={style.styleInput}
        placeholder='Write a title'
        onChangeText={(text) => handleChange('title', text)}



      />
      <TextInput style={style.styleInput}
        placeholder='Write a description'
        onChangeText={(text) => handleChange('description', text)}

      />
      <TouchableOpacity style={style.styleBtn} onPress={handleSubmit}>
        <Text style={style.styleText}>
          Save Task
        </Text>
      </TouchableOpacity> 


    </Layout>
  )
}


const style = StyleSheet.create({
  styleInput:{
    padding: 20,
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#7eaeff',
    width: '80%',
    color: '#000',
    borderRadius: 5
  },
  styleBtn:{
    display: 'flex',
    backgroundColor:'#0058c2',
    width: '40%',
    height: '7%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  styleText:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }

})

export default TaskFormScreen