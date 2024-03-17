import { useState } from 'react'

// custom hooks
import useToDo from '../hooks/useToDo'

// custom components
import CustomForm from '../components/Forms/CustomForm'
import EditForm from '../components/Forms/EditForm'
import TaskList from '../components/TaskList/TaskList'

const Home = () => {
  const { queryGetTodos, mutationPostTodo, mutationUpdateTodo, mutationDeleteTodo } = useToDo()
  const [previousFocusEl, setPreviousFocusEl] = useState(null)
  const [editedTask, setEditedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const closeEditMode = () => {
    setIsEditing(false)
    previousFocusEl.focus()
  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }

  return (
    <>
      {
        isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={mutationUpdateTodo.mutate}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={mutationPostTodo.mutate} />
      {
        queryGetTodos.data && (
          <TaskList
            tasks={queryGetTodos.data}
            deleteTask={mutationDeleteTodo.mutate}
            toggleTask={mutationUpdateTodo.mutate}
            enterEditMode={enterEditMode}
          />
        )
      }
    </>
  )
}

export default Home