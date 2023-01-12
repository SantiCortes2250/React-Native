import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import {getTask} from '../api'
import TaskList from '../components/TaskList'
import Layout from '../components/Layout'


const HomeScreen = () => {

    const [tasks, setTasks] = useState([])


    const loadTask = async () =>{
        const data = await getTask()
        setTasks(data)

        
        
    }

    useEffect(() => {
        loadTask()
        


    }, [])
  return (
    <Layout>
        
        <TaskList tasks={tasks} />
        
        
    </Layout>
  )
}

export default HomeScreen
