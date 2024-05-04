import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const ItemDetails = ({ params: { id } }: Props) => {
  return <div>ItemDetails {id}</div>;
};

export default ItemDetails;
