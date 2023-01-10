import {connect} from '../database'


export const getTasks = async (req, res) => {
    const conection = await connect();
    
    const [rows] = await conection.query('SELECT * FROM tasks');
    res.json(rows);

    
}

export const getTask = async (req, res) => {
    const conection = await connect();
    const [rows] = await conection.query('SELECT * FROM tasks WHERE id =?', [req.params.id]);
    res.json(rows);
    
}

export const getTaskCount = async  (req, res) => {
    const conection = await connect();
    const [rows] = await conection.query('SELECT COUNT(*) AS count FROM tasks');
    res.json(rows[0].count);
}

export const createTask = async (req, res) => {
    const conection = await connect();
    const [results] = await conection.query('INSERT INTO tasks (title, description) VALUES (?,?)', [req.body.title, req.body.description]);
     res.json({
        id: results.insertId,
        ...req.body,
     })

}

export const deleteTask = async (req, res) => {
    const conection = await connect();
        await conection.query('DELETE FROM tasks WHERE id =?', [req.params.id]);
        
        res.sendStatus(204);
        


}

export const updateTask = async (req, res) => {
    const conection = await connect();
    await conection.query('UPDATE tasks SET ? WHERE  id=?', [
        req.body,
        req.params.id
    ])
    
    res.sendStatus(204);

}
  



