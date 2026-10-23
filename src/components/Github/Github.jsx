import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/leqdxr")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])
  return (
    <>
      <div className="bg-gray-500 text-white text-center font-bold">
        Github followers: {data.followers}
        <img src={data.avatar_url} height={300} width={300} className='block m-auto'/>
      </div>
    </>
  );
}
