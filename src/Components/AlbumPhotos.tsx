import { Link } from "react-router-dom";
import { AlbumPhotoType } from "../Types/AlbumPhotoType";

type Props = {
  data: AlbumPhotoType;
};

const AlbumPhotos = ({ data }: Props) => {
  return (
    <div>
      <Link to={`/photos/${data.id}`}>
        <img
          className="cursor-pointer rounded border border-white"
          src={data.thumbnailUrl}
          alt="Fotos do album"
        />
      </Link>
    </div>
  );
};

export default AlbumPhotos;
