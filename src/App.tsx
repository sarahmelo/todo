import { useState } from 'react'
import './App.css'
import { EmptyList } from './components/emtyList/EmptyList'
import { Search } from './components/search/Search'
import { TaskList } from './components/task/TaskList'
import { TaskCounter } from './components/taskCounter/TaskCounter'
import { ITask } from './interface/task.interface'
import './style/global.css'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleNewTask = (newTask: ITask): void => {
    setTaskList([...taskList, newTask])
  } 

  const hasTask = (): boolean => taskList.length !== 0;

  return (
    <div className='main'>
      <Search onNewTask={handleNewTask}/>
      <TaskCounter taskCounter={taskList} />
      {
        hasTask() 
        ? <TaskList tasks={taskList} />
        : <EmptyList/>
      }
      
    </div>
  )
}

export default App
