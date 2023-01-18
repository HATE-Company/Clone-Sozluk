import React from 'react'
import Image from 'next/image'
import searchIcon from '../../public/searchIcon.png'

function SearchBox() {
  return (
    <>
        <form action="">
            <input type="text" className='form-control' placeholder='Search' />
            <button className='btn'>
                <Image 
                    src={searchIcon}
                    width={27}
                    height={31}
                    alt="SearchIcon"
                />
            </button>
        </form>   
    </>
  )
}

export default SearchBox