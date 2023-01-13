const API = 'http://192.168.0.14:3000/tasks'

export const getTask = async () =>{
    const res = await fetch(API)
    return await res.json()
}

export const saveTask = async (newTask) =>{
        const res = await fetch(API, {
        method: 'POST',
        headers: {
            Accept: 'application/json', 'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)


    })

    return await res.json();

    
}

export const deleteTask = async (id) =>{
    fetch(`${API}/${id}`,{
        method: 'DELETE',
    })


}