import TaskService from '../services/TaskService.js'

class TaskController {
    async create(req, res) {
        try {
            const task = await TaskService.create(req.body)
            res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const task = await TaskService.getAll()
            return res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const task = await TaskService.getOne(req.params.id)
            return res.json(task)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const updateTask = await TaskService.update(req.body)
            return res.json(updateTask)
        }  catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const task = await TaskService.delete(req.params.id)
            return res.json(task)
        }  catch (e) {
            res.status(500).json(e)
        }
    }
}
export default new TaskController()