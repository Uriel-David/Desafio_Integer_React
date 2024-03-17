// styles
import styles from './TaskItem.module.css'

// Library imports
import { CheckIcon  } from '@heroicons/react/24/outline'
import { PencilSquareIcon  } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const handleCheckboxChange = (e) =>{
    toggleTask({ id: task.id, is_checked: !task.is_checked })
  }

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={task.is_checked}
          onChange={handleCheckboxChange}
          name={task.title}
          id={task.id}
        />
        <label
          htmlFor={task.id}
          className={styles.label}
        >
          {task.title} - {task.description}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24}/>
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className='btn'
          aria-label={`Update ${task.title} Task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilSquareIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.title} Task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </li>
  )
}

export default TaskItem