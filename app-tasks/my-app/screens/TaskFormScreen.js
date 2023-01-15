import { View, Text, TextInput, StyleSheet, TouchableOpacity  } from 'react-native'
import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import { saveTask, getTask, updateTask } from '../api'
import { TabRouter } from '@react-navigation/native'


const TaskFormScreen = ({navigation, route}) => {


  const [tasks, setTasks] = useState({
    title: "",
    description: ""
  })

    const [edit, setEditing] = useState(false)
  


  const handleChange = (name, value) => setTasks({...tasks, [name]:value})

  const handleSubmit = async() =>{
    try {
      
      if (!edit){
        await saveTask(tasks)

      }else{
        await updateTask(route.params.id, tasks)
      }
      
      navigation.navigate('HomeScreen')
      
    } catch (error) {
      console.error(error)
      
    }




  }





  

  
  useEffect(() => {
    if(route.params && route.params.id){
        navigation.setOptions({ headerTitle: 'Updating a Task'})
        setEditing(true); 

        
        (async () =>{
          const task = await getTask(route.params.id);
          
          task.forEach(element => {
            setTasks({ title: element.title, description: element.description})
            
          });
          
        

          
        })();
    }
    
  }, []);

  
  

  return (
    
    <Layout>
      <TextInput style={style.styleInput}
        placeholder='Write a title'
        onChangeText={(text) => handleChange('title', text)}
        value={tasks.title}



      />
      <TextInput style={style.styleInput}
        placeholder='Write a description'
        onChangeText={(text) => handleChange('description', text)}
        value={tasks.description}

      />
      {!edit ? (
          <TouchableOpacity style={style.styleBtn} onPress={handleSubmit}>
            <Text style={style.styleText}>Save Task</Text>
          </TouchableOpacity> 
        ) : (
          <TouchableOpacity style={style.styleBtn} onPress={handleSubmit}>
            <Text style={style.styleText}>Update Task</Text>
          </TouchableOpacity> 
      )}
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