import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const ItemsLists = ({ params: { slug } }: Props) => {
  console.log(slug)
  return <div>ItemsLists {slug}</div>;
};

export default ItemsLists;
