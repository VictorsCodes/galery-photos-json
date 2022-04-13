import { BrowserRouter, Routes, Link } from "react-router-dom";
import RoutesList from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <nav className="flex justify-center bg-slate-300 shadow py-5">
          <Link to="/" className="text-slate-900 text-2xl font-bold">
            Galeria de fotos
          </Link>
        </nav>
        <div className="flex-1 px-5">
          <RoutesList />
        </div>
        <footer className="text-white fixed bottom-0 shadow w-full bg-slate-900 py-5 text-center">
          Direitos não reservados. ©
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
