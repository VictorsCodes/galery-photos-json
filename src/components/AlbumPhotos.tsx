import { Link } from "react-router-dom";
import { AlbumPhotoType } from "../types/AlbumPhotoType";

type Props = {
  data: AlbumPhotoType;
};

const AlbumPhotos = ({ data }: Props) => {
  return (
    <div>
      <Link to={`/photos/${data.id}`}>
        <img
          className="cursor-pointer rounded"
          src={data.thumbnailUrl}
          alt=""
        />
      </Link>
    </div>
  );
};

export default AlbumPhotos;
