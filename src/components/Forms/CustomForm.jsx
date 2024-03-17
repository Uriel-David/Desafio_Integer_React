import { useState } from 'react'

// library imports
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    addTask({
      title: taskTitle,
      description: taskDescription
    })
  }

  return (
    <form
      className='todo'
      onSubmit={handleFormSubmit}
    >
      <div className='wrapper'>
        <input
          type='text'
          id='taskTitle'
          className='input'
          value={taskTitle}
          onInput={(e) => setTaskTitle(e.target.value)}
          required
          autoFocus
          maxLength={30}
          placeholder='Enter Task Title'
        />

        <label
          htmlFor='taskTitle'
          className='label'
        >
          Enter Task Title
        </label>
      </div>

      <div className='wrapper'>
        <input
          type='text'
          id='taskDescription'
          className='input'
          value={taskDescription}
          onInput={(e) => setTaskDescription(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder='Enter Task Description'
        />

        <label
          htmlFor='taskDescription'
          className='label'
        >
          Enter Task Description
        </label>
      </div>

      <button
        className='btn'
        aria-label='Add Task'
        type='submit'
      >
        <PlusIcon />
      </button>
    </form>
  )
}

export default CustomForm