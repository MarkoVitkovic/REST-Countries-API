import React from 'react'

const Card = ({ country }) => {
    return (
        <div className="max-w-sm rounded-lg shadow bg-[white] dark:bg-neutral-darkBlue text-neutral-veryDarkBlueLight dark:text-neutral-veryLightGray mb-20">
            <a href="#">
                <img className="rounded-t-lg h-[250px] w-full object-cover" src={country.flag} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <p className='text-2xl font-[700]'>{country.name}</p>
                </a>
                <div className='pt-5'>
                    <p className='text-lg font-semibold mb-2'>Population: <span className='font-[400]'>{country.population.toLocaleString(undefined, { minimumFractionDigits: 0 })}</span></p>
                    <p className='text-lg font-semibold mb-2'>Region: <span className='font-[400]'>{country.region}</span></p>
                    <p className='text-lg font-semibold mb-2'>Capital: <span className='font-[400]'>{country.capital}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Card