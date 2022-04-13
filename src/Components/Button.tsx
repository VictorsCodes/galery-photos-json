import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-slate-200 hover:bg-slate-300 rounded py-3 px-5 text-slate-900 mt-2"
      >
        Voltar
      </button>
    </>
  );
};

export default Button;
