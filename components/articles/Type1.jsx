import React, { useState } from 'react'
import Image from 'next/image'
import { FaComments } from "react-icons/fa";
import List from '../comments/List';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import Form from '../comments/Form';
import { addComment } from '../../store/reducers'

function Type1({ author, date, text, img, id }) {

    const [comment, setComment] = useState(false)

    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addComment({
            id: nanoid(),
            title: event.target.title.value,
            name: event.target.name.value,
            desc: event.target.desc.value,
            articleId: id,
        }))
    }

    return (
        <div className='article'>
            <div className="row justify-content-between mb-3">
                <div className="col-auto">
                    <strong className="author">
                        <span className="icon"><Image
                            src={'/icons/articleUserIcon.png'}
                            width={20}
                            height={20}
                            alt="articleUserIcon"
                        /></span>
                        <span className="title">{author}</span>
                    </strong>
                </div>
                <div className="col-auto">
                    <span className="date">{date}</span>
                </div>
            </div>
            <div className="text mb-3">{text}</div>
            {img ? <div className="img mb-3"><Image src={img} layout={"intrinsic"} width={750} height={200} alt={author} /></div> : ''}
            <div className="d-block">
                <button onClick={() => setComment(!comment)} className='siteBtn btn'><FaComments /> <span>Comments</span></button>
            </div>
            <div className={(comment ? '' : 'd-none')}>
                <List articleId={id} />
                <Form handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Type1