import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLike, addReplyComment } from '../../store/reducers'
import Form from './Form'
import { FaHeart, FaReply } from "react-icons/fa";


function ListItem(props) {

    const timeSince = (time = props.date) => {
        switch (typeof time) {
            case 'number':
                break;
            case 'string':
                time = +new Date(time);
                break;
            case 'object':
                if (time.constructor === Date) time = time.getTime();
                break;
            default:
                time = +new Date();
        }
        var time_formats = [
            [60, 'seconds', 1], // 60
            [120, '1 minute ago', '1 minute from now'], // 60*2
            [3600, 'minutes', 60], // 60*60, 60
            [7200, '1 hour ago', '1 hour from now'], // 60*60*2
            [86400, 'hours', 3600], // 60*60*24, 60*60
            [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
            [604800, 'days', 86400], // 60*60*24*7, 60*60*24
            [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
            [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
            [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
            [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
            [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
            [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
            [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
            [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
        ];
        var seconds = (+new Date() - time) / 1000,
            token = 'ago',
            list_choice = 1;

        if (seconds == 0) {
            return 'Just now'
        }
        if (seconds < 0) {
            seconds = Math.abs(seconds);
            token = 'from now';
            list_choice = 2;
        }
        var i = 0,
            format;
        while (format = time_formats[i++])
            if (seconds < format[0]) {
                if (typeof format[2] == 'string')
                    return format[list_choice];
                else
                    return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
            }
        return time
    }

    const dispatch = useDispatch()
    const setLikes = (id = props.id) => dispatch(setLike(id))
    const [activeForm, setActiveForm] = useState('d-none')

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addReplyComment({
            name: event.target.name.value,
            desc: event.target.desc.value,
            parentId: event.target.parentId.value,
        }))
    }

    const nameSplitted = props.propName.split(" ").map(x => x[0]).join("")
    return (
        <div className="comment-main-level">
            <div className="comment-avatar">
                {nameSplitted}
            </div>
            <div className="comment-box">
                <div className="comment-head">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <h6 className="comment-name by-author"><a href="https://github.com/emrekaradag11/" target="_blank" rel="nofollow noreferrer">{props.propName}</a></h6>
                            <span>{timeSince()}</span>
                        </div>
                        <div className="col-auto">
                            <div className="badge">{props.vote}</div>
                            <button onClick={() => setLikes()} className='btn'><FaHeart /></button>
                            <button onClick={() => setActiveForm(activeForm === 'd-none' ? '' : 'd-none')} className='btn'><FaReply /></button>
                        </div>
                    </div>
                </div>
                <div className="comment-content">
                    {props.desc}
                </div>
                <div className={activeForm + " formContent"}>
                    <Form handleSubmit={handleSubmit} parentId={props.id} />
                </div>
            </div>
        </div>
    )
}

export default ListItem