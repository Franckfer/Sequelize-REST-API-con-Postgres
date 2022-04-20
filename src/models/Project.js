import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";

export const Project = sequelize.define('projects', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.INTEGER,
    }, 
    description: {
        type: DataTypes.STRING,
    }

}, {
    timestamps: false
});

Project.hasMany(Task, {
    foreingKey: 'projectId',
    sourceKey: 'id'
});

Task.belongsTo(Project, {
    foreingKey: 'projectId',
    targetId: 'id'
})