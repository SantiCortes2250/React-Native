import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem'


const TaskList = ({tasks}) => {

  const items = ({item})=>{
    return <TaskItem task={item}/>
  }


  return (

    <FlatList
    style={{width: '100%', height: '100%'}}
        data={tasks}
        keyExtractor={(item ) => item.id + ''}
        renderItem={items}
    />
  )
}

export default TaskList