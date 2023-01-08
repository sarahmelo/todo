import { useState } from 'react'
import './App.css'
import { EmptyList } from './components/emtyList/EmptyList'
import { Header } from './components/header/Header'
import { Search } from './components/search/Search'
import { TaskList } from './components/task/TaskList'
import { TaskCounter } from './components/taskCounter/TaskCounter'
import { ITask } from './interface/task.interface'
import './style/global.css'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleNewTask = (newTask: ITask): void => {  
    const taskIsIncluded = taskList.some((task) => task.name === newTask.name)
    
    if (taskIsIncluded) {
      return;
    }

    setTaskList([...taskList, newTask])
  } 

  const hasTask = (): boolean => taskList.length !== 0;

  return (
    <>
      <div className='darkBlock'>
        <Header/>
      </div>
      <div className='main'>
        <Search onNewTask={handleNewTask}/>
        <TaskCounter taskCounter={taskList} />
        {
          hasTask() 
          ? <TaskList tasks={taskList} setTaskList={setTaskList} />
          : <EmptyList/>
        }
      </div>
    </>
  )
}

export default App
