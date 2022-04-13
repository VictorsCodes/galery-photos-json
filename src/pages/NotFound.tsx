import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="text-slate-900 text-4xl text-center">
      404 - NOT FOUND{" "}
      <button
        onClick={() => navigate(-1)}
        className="bg-slate-200 hover:bg-slate-300 rounded py-3 px-5 text-slate-900 mt-5 flex gap-2 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Voltar
      </button>
    </div>
  );
};

export default NotFound;
