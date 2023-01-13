import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const TaskItem = ({task, handleDelete}) => {

    const navigation = useNavigation()
  return (
    <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', { id: task.id })}>
            <Text style={styles.itemTitle}>{task.title}</Text>
            <Text style={styles.itemDescription}>{task.description}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnDelete}
            onPress={()=> handleDelete(task.id)}
        >
            
            <Text style={styles.textBtn}>
                Delete
            </Text>
        </TouchableOpacity>
        



    </View>
  )
}


const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: '#0058c2',
        marginVertical: 10,
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle:{
        color:'#ffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemDescription:{
        color: '#333333',
        fontSize: 18,

    },
    btnDelete:{
        backgroundColor: '#ff0000',
        width: '20%',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: 7
        
        
        
    },
    textBtn:{
        color:'#fff',
        padding: 10,
        
        

    }
})

export default TaskItem