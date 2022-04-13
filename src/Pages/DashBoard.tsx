import { api } from "../Api";
import { useEffect, useState } from "react";
import { AlbumType } from "../Types/AlbumsTypes";
import DashBoardItem from "../Components/DashBoardItem";

const DashBoard = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const LoadAlbums = () => {
    api.get("/albums").then((response) => setAlbums(response.data));
  };

  useEffect(() => LoadAlbums(), []);

  return (
    <>
      {albums.map((album, index) => (
        <DashBoardItem key={index} data={album} />
      ))}
    </>
  );
};

export default DashBoard;
