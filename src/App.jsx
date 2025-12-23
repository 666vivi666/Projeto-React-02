// App principal com React Router e Tailwind
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Curiosidades from './pages/Curiosidades.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="//curiosidades" element={<Curiosidades />} />

            <Route path="*" element={<div className="text-center text-gray-600">Página não encontrada</div>} />
          </Routes>
        </main>
        <footer className="bg-white border-t">
          <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Criado por Vivian Lopes
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
