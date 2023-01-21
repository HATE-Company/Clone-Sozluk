import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux';

function List({ articleId = "" }) {

    const commentList = useSelector((state) => state.comment.commentList).filter(item => item.articleId === articleId)

    const Parent = (item) => (
        <Item parentId={item.parentId} title={item.title} desc={item.desc} vote={item.vote} date={item.date} propName={item.name} id={item.id} />
    );

    const Child = (item) => (
        <>
            {item?.children.length > 0 ? (
                <ul className='comments-list reply-list'>
                    {item?.children.map((item2, key) => {
                        return <li key={key}>
                            <Parent {...item2} />
                            <Child key={key} {...item2} />
                        </li>
                    })}
                </ul>
            ) : null}
        </>
    );
    return (

        <ul id="comments-list" className='comments-list'>
            {commentList?.length > 0 ? commentList?.map((item, key) => (
                <li key={key}>
                    <Parent {...item} />
                    <Child key={key} {...item} />
                </li>
            )) : <li className='noComment alert alert-dark'>No Comment</li>}
        </ul>
    )
}


export default List

