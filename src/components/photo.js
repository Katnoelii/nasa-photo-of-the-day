import React from 'react'

const Photo = props => {

    return (
        <html>
            <div className="todayPic">
                <img src={props.imgUrl}/>
            </div>
        </html>
    )
}

export default Photo