import { Routes, Route } from 'react-router-dom';
import Auth from './components/pages/Auth';
import Todo from './components/pages/Todo';
import './App.css';
import { AlertModalProvider } from './store/modal-context';
import AuthRoute from './components/common/util/AuthRoute';

function App() {
  return (
    <div className="App">
      <AlertModalProvider>
        <Routes>
          <Route path="/" element={<AuthRoute element={<Auth />} destination="/todo" reversed />} />
          <Route path="/todo" element={<AuthRoute element={<Todo />} destination="/" />} />
        </Routes>
      </AlertModalProvider>
    </div>
  );
}

export default App;
