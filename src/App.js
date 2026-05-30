import './App.css';
import { Task } from './component/Task';
import { Navbar } from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Navbar />
                </header>
                <main>
                    <Task />
                </main>
                <Routes>
                    <Route path="/" element={<Task />} />
                    <Route path="/about" element={<Task />} />
                </Routes>
            </div >
        </BrowserRouter>
    );
};

export default App;