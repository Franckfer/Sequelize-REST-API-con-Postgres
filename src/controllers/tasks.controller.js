import { Task } from '../models/Task.js';


export const getTasks = async (req, res) => {

    try {
        
        const tasks = await Task.findAll();

        console.log(tasks);
        return res.json(tasks)

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getTask = async (req, res) => {

    const { id } = req.params;

    try {

        const task = await Task.findOne({
            where: { id },
            attributes: ['name']
        });

        return res.json(task);

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        })
    }
    
}

export const createTask = async (req, res) => {

    const { name, done, projectId } = req.body;

    try {
        
        const newTaks = await Task.create({
            name,
            done,
            projectId
        });

        return res.json(newTaks);

    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        })
    }

}

export const updateTask = async (req, res) => {

    const { id } = req.params;

    try {
        
        const task = await Task.findOne({
            where: { id }
        });

        task.set(req.body);

        await task.save();

        return res.json(task)


    } catch (error) { 
        
        return res.status(500).json({
            message: error.message
        })

    }
    
}

export const deleteTask = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Task.destroy({
            where: { id }
        });

        res.sendStatus(204)

    } catch (error) { 
        
        return res.status(500).json({
            message: error.message
        })

    }

}



