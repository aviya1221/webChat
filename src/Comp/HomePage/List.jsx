import useData from "../../assets/store.js";
import { useState, useEffect } from "react";
import ListCard from "./ListCard.jsx";

export default function List() {
  const { data, input, backToOringinal, filterByName } =
    useData();


  useEffect(() => {
    if (input === "") backToOringinal();
    else filterByName(input);
  }, [input]);

  return (
    <>
      <div className="wrapCards">
        {data.length === 0 ? (
          <div id="notFound">
            <p>Sorry but we can't find your search result ☹️</p>
          </div>
        ) : (
          data.map((item) => (
            <ListCard item={item} key={item.Key} ></ListCard>
          ))
        )}
      </div>
    </>
  );
}
