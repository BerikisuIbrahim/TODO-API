//import { required } from "joi";
import { toJSON } from "@reis/mongoose-to-json";
import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    title: {type: String, required: true},
    icon: {type: String, required: true },
    completed: {type: Boolean, default: false}
}, {
    timestamps: true
});

todoSchema.index({nme: 'text', tittle: 'text'})

todoSchema.plugin(toJSON);

export const TodoModel = model('Todo', todoSchema);