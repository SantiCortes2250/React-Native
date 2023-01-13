import {  FlatList, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import TaskItem from './TaskItem'
import { getTask, deleteTask } from '../api'


const TaskList = () => {


  const [tasks, setTasks] = useState([])
  const [refresing, setRefresing] = useState(false)


    const loadTask = async () =>{
        const data = await getTask()
        setTasks(data)
    }

    useEffect(() => {
        loadTask()
    }, [])


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