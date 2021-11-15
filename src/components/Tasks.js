// const tasks = [
//   { id: 1, text: 'Big Day', day: 'Jan 23 2021 at 8:00 PM', reminder: true },
//   {
//     id: 2,
//     text: 'Christmas Day',
//     day: 'Dec 23 2021 at 8:00 PM',
//     reminder: false,
//   },
//   { id: 3, text: 'First Step', day: 'Jul 11 2019 at 8:00 PM', reminder: true },
// ]

import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}

export default Tasks
