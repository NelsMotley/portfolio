import logo from './logo.svg';
import './App.scss';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/homepage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      </Route>
      
    </Routes>
    </>
  );
}

export default App;