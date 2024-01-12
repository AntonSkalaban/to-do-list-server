import Task from '../documents/Task.js'

class TaskService {
    async create(task) {
        const createdTask = await Task.create(task)
        return createdTask;
    }

    async getAll() {
        const task = await Task.find()
        return task
    }

    async getOne(id) {
        if (!id)  throw new Error('Id не найден')
        const task = await Task.findById(id)
        return task
    }

    async update(task) {
        if (!task._id) throw new Error('Id не найден')
        const updateTask = await Task.findByIdAndUpdate(task._id, task, {new: true})
        return updateTask
    }

    async delete(id) {
        if (!id) throw new Error('Id не найден')
        const task = await Task.findByIdAndDelete(id)
        return task
    }
}

export default new TaskService()

