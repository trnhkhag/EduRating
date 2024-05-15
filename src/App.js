import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import School from './pages/School/school';
import DefaultLayout from './components/Layout/DefaultLayout';
import './styles/App.css';

// code moi

function App() {
  return (
    <Router>
      <div className='root'>
        <Routes>
          <Route path='/' element={<DefaultLayout><Home /></DefaultLayout>}></Route>
          <Route path='/schools' element={<DefaultLayout><School /></DefaultLayout>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
