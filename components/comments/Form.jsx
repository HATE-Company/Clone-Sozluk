import React from 'react'
import PropTypes from "prop-types";

function Form(props) {
    return (
        <form className='mt-5 p-3' onSubmit={(e) => { props.handleSubmit(e); }}>
            <div className="form-group mb-3">
                <input type="text" required id='name' name='name' className="form-control" placeholder="Name" />
            </div>
            <div className="form-group mb-3">
                <textarea id='comment' required name="desc" cols={10} rows={10} placeholder='Comment' className='form-control'></textarea>
            </div>
            <div className="d-none hiddenValues">
                <input type="hidden" name="parentId" value={props.parentId} />
            </div>
            <div className='text-end'><button type="submit" className="btn siteBtn2">Submit</button></div>
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func,
    parentId: PropTypes.string
}

Form.defaultProps = {
    handleSubmit: {},
    parentId: '0',
}


export default Form