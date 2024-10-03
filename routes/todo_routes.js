import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo_controller.js";

// Create a routes
const todoRouter = Router();

// Define routes
todoRouter.post('/todos', addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);


// Export router
export default todoRouter;