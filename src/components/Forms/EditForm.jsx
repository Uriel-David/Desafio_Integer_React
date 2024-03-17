import { useState, useEffect } from 'react'

// library imports
import { CheckIcon } from '@heroicons/react/24/solid'

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.title)
  const [updatedTaskDescription, setUpdatedTaskDescription] = useState(editedTask.description)

  useEffect(()=> {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode()
    }

    window.addEventListener('keydown', closeModalIfEscaped)

    return () => {
      window.removeEventListener('keydown', closeModalIfEscaped)
    }
  }, [closeEditMode])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    updateTask({id: editedTask.id, title: updatedTaskName, description: updatedTaskDescription})
    closeEditMode()
  }

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
    >
      <form
        className="todo"
        onSubmit={handleFormSubmit}
      >
        <div className="wrapper">
          <input
            type="text"
            id="editTaskName"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={30}
            placeholder="Update Task Name"
          />
          <label
            htmlFor="editTaskName"
            className="label"
          >
            Update Task Name
          </label>
        </div>

        <div className="wrapper">
          <input
            type="text"
            id="editTaskDescription"
            className="input"
            value={updatedTaskDescription}
            onInput={(e) => setUpdatedTaskDescription(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label
            htmlFor="editTaskDescription"
            className="label"
          >
            Update Task Description
          </label>
        </div>

        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  )
}

export default EditForm