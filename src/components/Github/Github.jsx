import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch("https://api.github.com/users/leqdxr")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  // }, [])
  return (
    <>
      <div className="bg-gray-500 text-white text-center font-bold">
        Github followers: {data.followers}
        <img src={data.avatar_url} height={300} width={300} className='block m-auto'/>
      </div>
    </>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/leqdxr")
  const data = await response.json()
  return data
}
