import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData()

    // const [data, setdata] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/ValoraSheikh')
    //     // fetch('https://api.github.com/users/hiteshChoudhary')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setdata(data)
    //     })

    // }, [])
    

    return (
        <div className='text-center m-4 bg-gray-500 text-white p-3 text-3xl'>GitHub folowers: {data.followers}
        <img className='' src={data.avatar_url} width={300} alt="Git picture" />
        </div>
    )
}

export default GitHub;

export const gitHubInfoLoader = async () => {
    let response = await fetch('https://api.github.com/users/ValoraSheikh');
    return await response.json();
}