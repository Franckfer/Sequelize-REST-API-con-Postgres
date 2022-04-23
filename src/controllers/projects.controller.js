import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';


export const getProjects = async (req, res) => {
    
    try {
        const projects = await Project.findAll();

        console.log(projects);
        return res.json(projects)
        
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getProject = async (req, res) => {

    const { id } = req.params;

    try {

        const project = await Project.findOne({
            where : { id }
        })
    
        if (!project)  return res.status(404).json({message : 'Project do not exists'})

        return res.json(project)
        
    } catch (error) {
        
        console.error(error);
        return res.status(500).json({
            message: error.message
        })
    }
}

export const createProject = (req, res) => {

    const { name, priority, description } = req.body

    try {
        
        const newProject = Project.create({
            name,
            priority,
            description
        });
    
        console.log(newProject)
        return res.json(newProject);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateProjects = async (req, res) => {

    const { id } = req.params;
    const { name, priority, description } = req.body;

    try {
        
        const updateProject = await Project.findByPk(id)
        updateProject.name = name;
        updateProject.priority = priority;
        updateProject.description = description;
        await updateProject.save();
        
        return res.json(updateProject)

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteProjects = async (req, res) => {

    const { id } = req.params;

    try {
        
        await Project.destroy({
            where: { id }
        })

        res.sendStatus(204)
        
    } catch (error) {
        
        console.error(error);
        return res.status(500).json({
            message: error.message
        })
    }

}

export const getProjectTasks = async (req, res) => {

    const { id } = req.params;

    try {
        
        const tasks = await Task.findAll({
            where: { projectId : id}
        })

        return res.json(tasks);

    } catch (error) {
        
        console.error(error);
        return res.status(500).json({
            message: error.message
        })

    }



}
