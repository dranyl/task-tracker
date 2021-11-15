// import React from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    { id: 1, text: 'Big Day', day: 'Jan 23 2021 at 8:00 PM', reminder: true },
    {
      id: 2,
      text: 'Christmas Day',
      day: 'Dec 23 2021 at 8:00 PM',
      reminder: false,
    },
    {
      id: 3,
      text: 'First Step',
      day: 'Jul 11 2019 at 8:00 PM',
      reminder: true,
    },
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle a reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

// if using component based
// class App extends React.Component {
//   render() {
//     return <h1>Welcome to React</h1>
//   }
// }

export default App
