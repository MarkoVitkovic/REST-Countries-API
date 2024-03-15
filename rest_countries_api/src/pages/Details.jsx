import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../assets/data.json'
import AppLayout from '../components/layouts/AppLayout'

const Details = () => {

    const params = useParams()
    const [country, setcountry] = useState([])

    useEffect(() => {
        const findcountry = data.find(data => data.alpha2Code === params.slug)
        setcountry(findcountry)
        console.log(findcountry?.topLevelDomain);
    }, [data])

    return (
        <AppLayout>
            <div className='w-full flex items-start justify-between p-20 min-h-screen'>
                <div className='w-1/2'>
                    <img src={country?.flag} alt="flag" className='w-full p-10' />
                </div>
                <div className='w-1/2 text-neutral-veryDarkBlueLight dark:text-neutral-veryLightGray p-20'>
                    <p className='text-4xl font-[700] mb-10'>{country?.name}</p>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-xl font-semibold mb-2'>Native Name: <span className='font-[400]'>{country?.nativeName}</span></p>
                            <p className='text-xl font-semibold mb-2'>Population: <span className='font-[400]'>{country?.population?.toLocaleString(undefined, { minimumFractionDigits: 0 })}</span></p>
                            <p className='text-xl font-semibold mb-2'>Region: <span className='font-[400]'>{country?.region}</span></p>
                            <p className='text-xl font-semibold mb-2'>Sub Region: <span className='font-[400]'>{country?.subregion}</span></p>
                            <p className='text-xl font-semibold mb-2'>Capital: <span className='font-[400]'>{country?.capital}</span></p>
                        </div>
                        <div>
                            <p className='text-xl font-semibold mb-2'>Top Level Domain: <span className='font-[400]'>{ country?.topLevelDomain ? Object.keys(country?.topLevelDomain).map((item, index) => <span key={index}>{ (index ? ', ' : '') + country?.topLevelDomain[item] }</span>) : ''}</span></p>
                            <p className='text-xl font-semibold mb-2'>Currencies: <span className='font-[400]'>{country?.currencies?.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item.name }</span>)}</span></p>
                            <p className='text-xl font-semibold mb-2'>Languages: <span className='font-[400]'>{country?.languages?.map((item, index) => <span key={index}>{ (index ? ', ' : '') + item.name }</span>)}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Details