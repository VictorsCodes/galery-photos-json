import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import { Photo } from "../types/PhotoBigType";

const Photos = () => {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState<Photo>();
  const { id } = useParams();

  const loadPhotoBig = () => {
    api.get(`/photos/${id}`).then((response) => setPhoto(response.data));
  };

  useEffect(() => loadPhotoBig(), []);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-slate-200 hover:bg-slate-300 rounded py-3 px-5 text-slate-900 mt-2 block"
      >
        Voltar
      </button>
      <div>
        <h1 className="py-4 text-slate-900 font-bold">{photo?.title}</h1>
        <img src={photo?.url} alt="" width="300" />
      </div>
    </div>
  );
};

export default Photos;
