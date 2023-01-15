import {  FlatList, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import TaskItem from './TaskItem'
import {  deleteTask, getTasks } from '../api'
import { useIsFocused } from '@react-navigation/native'

const TaskList = () => {


  const [tasks, setTasks] = useState([])
  const [refresing, setRefresing] = useState(false)
  const isFocused = useIsFocused();


    const loadTask = async () =>{
        const data = await getTasks()
        setTasks(data)
    }

    useEffect(() => {
      
      loadTask()
      getTasks()
       
    }, [isFocused])


    const handleDelete = async (id) =>{
      await deleteTask(id)
      await loadTask()
    }

  const renderItems = ({item})=>{
    return <TaskItem task={item} handleDelete={handleDelete}/>
  }

 

  const onRefresh = React.useCallback(async ()=>{
    setRefresing(true)
    await loadTask()
    setRefresing(false)
  })


  return (

    <FlatList
    style={{width: '100%', height: '100%'}}
        data={tasks}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItems}
        refreshControl={
          <RefreshControl
          refreshing={refresing}
          onRefresh={onRefresh}
          />
        }
    />
  )
}

export default TaskList