// component import
import TaskItem from '../TaskItem/TaskItem'

// styles
import styles from './TaskList.module.css'

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      { tasks.data.data.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))
      }
    </ul>
  )
}

export default TaskList