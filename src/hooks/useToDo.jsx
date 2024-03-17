import {
    useQuery,
    useMutation,
    useQueryClient
} from '@tanstack/react-query'
import { getTodos, postTodo, updateTodo, deleteTodo } from '../api/todo'

const useToDo = () => {
    const queryClient = useQueryClient()

    const queryGetTodos = useQuery({ queryKey: ['todos'], queryFn: getTodos })

    const mutationPostTodo = useMutation({
      mutationFn: postTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })

    const mutationUpdateTodo = useMutation({
      mutationFn: updateTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })

    const mutationDeleteTodo = useMutation({
      mutationFn: deleteTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] })
      },
    })

    return {
        queryGetTodos,
        mutationPostTodo,
        mutationUpdateTodo,
        mutationDeleteTodo
    }
}

export default useToDo