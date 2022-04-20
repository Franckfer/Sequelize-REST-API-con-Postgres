import express from "express";
const app = express();
import projectsRoutes from './routes/projects.routes.js'


app.use(projectsRoutes)


export default app;
