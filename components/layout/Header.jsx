import React from 'react'
import Logo from '../../public/logo.svg'
import Image from 'next/image'
import SearchBox from '../search/SearchBox'

function Header() {
  return (
    <header>
        <div className="col-xl-11 mx-auto p-0">
            <div className="row align-items-center">
                <div className="col">
                    <div id="logo">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={100}
                            height={100}
                        />    
                    </div>
                </div>
                <div className="col">
                    <SearchBox />
                </div>
                <div className="col">
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header