import { Router } from "express";
import { addTodo, deleteTodo, countTodos, getTodoById, getTodos, updateTodo } from "../controllers/todo_controller.js";
import { localUpload, todoIconUpload } from "../middlewares/upload.js";

// Create a routes
const todoRouter = Router();

// Define routes
todoRouter.post('/todos', todoIconUpload.single('icon'), addTodo);

todoRouter.get('/todos', getTodos);

todoRouter.get('/todos/count', countTodos);


todoRouter.get('/todos/:id', getTodoById);


todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);


// Export router
export default todoRouter;