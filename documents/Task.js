import mongoose from "mongoose";

const Task = new mongoose.Schema({
   title:  {type: String, required: true},
   description: {type: String, default: '' },
   status:  {type: String, default: 'pending'},
})

export default mongoose.model('Task', Task)