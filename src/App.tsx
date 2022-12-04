import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Search } from './components/search/Search'
import { TaskList } from './components/taskList/TaskList'
import './style/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Header />
      <Search />
      <TaskList />
    </div>
  )
}

export default App
