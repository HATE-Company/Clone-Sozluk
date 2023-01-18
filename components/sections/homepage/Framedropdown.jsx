import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import topics from '../../../shared/jsons/topics.json'
import Image from 'next/image';

function Framedropdown() {

  return (
    <div>
        {topics.map(item => {
            return  <Dropdown key={item.id}>
                        <Dropdown.Toggle variant="">
                            <div className="img"><Image src={item.img} width={22} height={22} alt={item.title} /></div>
                            <div className="text">{item.title}</div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.children?.map(child => {
                                return <Dropdown.Item key={child.id} className='dropdown-toggle'><span className='text'>{child.title}</span></Dropdown.Item>
                            })}
                        </Dropdown.Menu>
                    </Dropdown>
            
        })}
    </div>
  )
}

export default Framedropdown