import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Feed from './paginas/Feed/index.jsx'
import Home from './paginas/Home'
import Detalhes from './paginas/Detalhes/index.jsx'

function App() {

  return (
    <div className='app' id="root">
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/feed' Component={Feed} />
          <Route path='/detalhes/:id' Component={Detalhes} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
