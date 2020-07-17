import React from 'react'

const Photos = props => {

    return (
        <div>
            <img src={props.imgUrl} alt='please read description below'/>
        </div>
    )
}

export default Photos;