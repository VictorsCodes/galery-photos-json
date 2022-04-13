import { api } from "../Api";
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photo } from "../Types/PhotoBigType";

const Photos = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo>();

  const loadPhotoBig = () => {
    api.get(`/photos/${id}`).then((response) => setPhoto(response.data));
  };

  useEffect(() => loadPhotoBig(), []);

  return (
    <div>
      <Button />
      <div>
        <h1 className="py-4 text-slate-900 font-bold">{photo?.title}</h1>
        <img className="rounded" src={photo?.url} alt="" width="300" />
      </div>
    </div>
  );
};

export default Photos;
