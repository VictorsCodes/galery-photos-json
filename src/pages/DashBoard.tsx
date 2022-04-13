import { useEffect, useState } from "react";
import { api } from "../api";
import DashBoardItem from "../components/DashBoardItem";
import { AlbumType } from "../types/AlbumsTypes";

const DashBoard = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);

  useEffect(() => {
    LoadAlbums();
  }, []);

  const LoadAlbums = async () => {
    api.get("/albums").then((response) => setAlbums(response.data));
  };

  return (
    <>
      {albums.map((album, index) => (
        <DashBoardItem key={index} data={album} />
      ))}
    </>
  );
};

export default DashBoard;
