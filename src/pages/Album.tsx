import { api } from "../api";
import { AlbumPhotoType } from "../types/AlbumPhotoType";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AlbumPhotos from "../components/AlbumPhotos";

const Album = () => {
  const [albumTitle, setAlbumTitle] = useState<String>("");
  const [albumPhotos, setAlbumPhotos] = useState<AlbumPhotoType[]>([]);
  const { id } = useParams();

  const loadPhotos = () => {
    api
      .get(`/albums/${id}/photos`)
      .then((response) => setAlbumPhotos(response.data));
  };

  const loadAlbumTitle = () => {
    api
      .get(`/albums/${id}`)
      .then((response) => setAlbumTitle(response.data.title));
  };

  useEffect(() => {
    loadAlbumTitle();
    loadPhotos();
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="bg-slate-200 hover:bg-slate-300 rounded py-3 px-5 text-slate-900 mt-2"
      >
        Voltar
      </button>
      <div className="bg-slate-900 mt-2 rounded flex flex-col">
        <h1 className="text-white px-7 pt-1">
          <span className="text-yellow-700 block">Album: #{id}</span>
          {albumTitle.toUpperCase()}
        </h1>
        <div className="grid sm:grid-cols-3 md:grid-cols-6 place-items-center sm:gap-5 md:gap-10 mt-10">
          {albumPhotos.map((photo, index) => (
            <AlbumPhotos data={photo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;
