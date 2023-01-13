import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import {getTask} from '../api'
import TaskList from '../components/TaskList'
import Layout from '../components/Layout'


const HomeScreen = () => (
    <Layout>
        <TaskList  />
    </Layout>
  )


export default HomeScreen
