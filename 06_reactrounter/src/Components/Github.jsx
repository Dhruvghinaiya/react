import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState();
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/dhruvghinaiya")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div>
      {console.log(data)}
      <h2>Hello Mr. {data?.login}</h2>
      <p>Github Followers : {data?.followers}</p>
      <img src={data?.avatar_url} alt="git picture" />
    </div>
  );
};

export default Github;

export const githubDataLoader = async () => {
  const res = await fetch("https://api.github.com/users/dhruvghinaiya");

  const data = await res.json();

  return data;
};
