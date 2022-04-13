import { Link } from "react-router-dom";
import { AlbumType } from "../Types/AlbumsTypes";

type DashBoardItemProps = {
  data: AlbumType;
};

const DashBoardItem = ({ data }: DashBoardItemProps) => {
  return (
    <Link
      to={`/albums/${data.id}`}
      className="text-slate-900 text-lg visited:text-purple-800"
    >
      <div className="bg-gray-200 hover:bg-slate-300  cursor-pointer rounded mt-6 p-3">
        {data.title}
      </div>
    </Link>
  );
};

export default DashBoardItem;
