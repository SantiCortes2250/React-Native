import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const TaskItem = ({task}) => {
  return (
    <View style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{task.title}</Text>
        <Text style={styles.itemDescription}>{task.description}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: '#0058c2',
        marginVertical: 10,
        borderRadius: 10,
        padding: 20,
    },
    itemTitle:{
        color:'#ffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemDescription:{
        color: '#333333',
        fontSize: 18,

    }
})

export default TaskItem