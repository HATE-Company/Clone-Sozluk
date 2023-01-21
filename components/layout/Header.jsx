import React from 'react'
import Logo from '../../public/logo.svg'
import Image from 'next/image'
import SearchBox from '../search/SearchBox'

function Header() {
  return (
    <header>
        <div className="col-xl-11 mx-auto px-3">
            <div className="row align-items-center">
                <div className="col-lg col-auto">
                    <div id="logo">
                        <Image
                            src={Logo}
                            alt="logo"
                            width={100}
                            height={100}
                        />    
                    </div>
                </div>
                <div className="col-lg-6 col">
                    <SearchBox />
                </div>
                <div className="col d-lg-block d-none">
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header