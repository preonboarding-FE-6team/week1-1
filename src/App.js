import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import './App.css';
import { AlertModalProvider } from './store/modal-context';

function App() {
  return (
    <div className="App">
      <AlertModalProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </AlertModalProvider>
    </div>
  );
}

export default App;
