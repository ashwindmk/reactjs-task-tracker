import { useState, useEffect } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

const defaultTasks = [
  {
      id: 1,
      title: 'Sample Task',
      text: 'Example',
      date: '5 Feb 2021',
      time: '2:30 PM',
      complete: false
  }
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const localTasks = localStorage.getItem('tasks');
    return localTasks ? JSON.parse(localTasks) : defaultTasks;
  });
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    let newId = tasks.length + 1;
    if (newId > 1) {
      let ids = tasks.map(e => e.id);
      for (let i = 0; i < ids.length; i++) {
        let id = Math.abs(ids[i]);
        if (id <= tasks.length) {
          ids[id - 1] = -(Math.abs(ids[id - 1]));
        }
      }
      for (let i = 0; i < ids.length; i++) {
        if (ids[i] > 0) {
          newId = i + 1;
          break;
        }
      }
    }

    const newTask = {id: newId, ...task};
    const newTasks = [...tasks, newTask];
    newTasks.sort((t1, t2) => Date.parse(t1.date + ' ' + t1.time) - Date.parse(t2.date + ' ' + t2.time));
    setTasks(newTasks);
    console.log('Add task', newTask);
  }

  const deleteTask = (id) => {
    setTasks(() => {
      return tasks.filter((task) => task.id !== id);
    })
  };

  const toggleComplete = (id) => {
    setTasks(() => {
      return tasks.map((task) => {
        if (task.id === id) {
          return {...task, complete: !task.complete}
        } else {
          return task;
        }
      });
    });
  }

  useEffect(() => {
    console.log('useEffect on tasks change: ', tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='container'>
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask} /> }
      { (tasks.length > 0) ?
          <Tasks tasks={tasks} onDelete={deleteTask} toggleComplete={toggleComplete} />
        :
          'No Tasks'
      }
      <Footer />
    </div>
  );
}

export default App;
