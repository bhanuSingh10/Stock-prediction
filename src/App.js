import './App.css';

import CustomRouter from './routes/customRouter'
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
    <CustomRouter/>
    </div>
  );
}

export default App;
