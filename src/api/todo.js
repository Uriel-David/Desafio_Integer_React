import api from '../utils/api'

export const getTodos = async () => {
    return await api.get('/todos')
}

export const postTodo = async (todo) => {
    return await api.post('/todos', todo)
}

export const updateTodo = async (todo) => {
    return await api.put(`/todos/${todo.id}`, todo)
}

export const deleteTodo = async (id) => {
    return await api.delete(`/todos/${id}`)
}