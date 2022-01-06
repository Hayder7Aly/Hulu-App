import React, { forwardRef } from 'react'
import Image from "next/image"
import { ThumbUpIcon } from '@heroicons/react/outline'

const ThumbNail = forwardRef(({result}, ref) => {
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div ref={ref} className="group cursor-pointer p-2 transform hover:-translate-y-3" >
            <Image layout="responsive" height={1080} width={1920} src={`${BASE_URL}${result.backdrop_path || result.poster_path}`} alt=""/>
            <div className="p-2">
                <p className="truncate max-w-md">{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">{result.release_date || result.first_air_date} 
                <ThumbUpIcon className="h-5 mx-2" />
                {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default ThumbNail
