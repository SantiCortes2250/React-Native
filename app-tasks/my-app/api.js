const API = 'http://192.168.0.14:3000/tasks'

export const getTask = async () =>{
    const res = await fetch(API)
    return await res.json()
}