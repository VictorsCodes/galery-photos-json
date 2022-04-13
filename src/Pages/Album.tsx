import { api } from "../Api";
import Button from "../Components/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlbumPhotos from "../Components/AlbumPhotos";
import { AlbumPhotoType } from "../Types/AlbumPhotoType";

const Album = () => {
  const { id } = useParams();
  const [albumTitle, setAlbumTitle] = useState<String>("");
  const [albumPhotos, setAlbumPhotos] = useState<AlbumPhotoType[]>([]);

  const LoadPhotos = () => {
    api
      .get(`/albums/${id}/photos`)
      .then((response) => setAlbumPhotos(response.data));
  };

  const LoadAlbumTitle = () => {
    api
      .get(`/albums/${id}`)
      .then((response) => setAlbumTitle(response.data.title));
  };

  useEffect(() => {
    LoadPhotos();
    LoadAlbumTitle();
  }, []);

  return (
    <div>
      <Button />
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
