import { FC } from "react";

interface ListNicknamesProps {
  names: string[];
  order: string;
}
//Component that show a list with orders
const ListNicknames: FC<ListNicknamesProps> = ({ names, order }) => {
  names = names.map((name) => name.trim());
  return (
    <ul>
      {order === "ASC" &&
        names?.sort().map((name, index) => <li key={index}>{name}</li>)}
      {order === "DES" &&
        names
          ?.sort()
          .reverse()
          .map((name, index) => <li key={index}>{name}</li>)}
    </ul>
  );
};

export default ListNicknames;
