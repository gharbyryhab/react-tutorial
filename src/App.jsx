import Hello from './components/hello/Hello'
import './App.css'
import TaskPage from './pages/TaskPage/TaskPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {

  return (

    <div className='app'>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Navigate to='/tasks' />} />
          <Route path='/hello' element={<Hello />} />
          <Route path='/tasks' element={<TaskPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App
