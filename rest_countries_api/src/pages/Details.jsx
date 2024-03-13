import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/data.json'
import AppLayout from '../components/layouts/AppLayout'

const Details = () => {

    const params = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        const findCountry = data.find(data => data.alpha2Code === params.slug)
        setCountry(findCountry)
        console.log(findCountry);
    }, [data])

    return (
        <AppLayout>
            <div className='w-full flex items-center justify-between p-20'>
                <div className='w-1/2'>
                    <img src={country.flag} alt="" />
                </div>
                <div className='w-1/2 text-neutral-veryDarkBlueLight dark:text-neutral-veryLightGray'>
                    <p className='text-3xl font-[700]'>{country.name}</p>
                </div>
            </div>
        </AppLayout>
    )
}

export default Details