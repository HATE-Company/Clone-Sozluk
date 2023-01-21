import React from 'react'
import Image from 'next/image'

function Type1({ title, category, text, img }) {
    return (
        <div className='newsItem'>
            <div className="img">{img ? <Image src={img} fill alt={title} /> : ''}</div>
            <div className="textWrapper">
                <strong className="title"> {title} </strong>
                <p className="text">{text}</p>
                <a href='#' className="category">
                    <div className="icon"><Image
                        src={'/icons/newsItemTitle.png'}
                        width={20}
                        height={20}
                        alt="newsItemTitle"
                    /></div>
                    <div className="titleSm">{category}</div>
                </a>
            </div>
        </div>
    )
}

export default Type1