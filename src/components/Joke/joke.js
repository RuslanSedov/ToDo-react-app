import React from 'react'
import './joke.css'
function Joke (props) {
    return (
        <div className='Joke'>
            <p><i>{props.question}</i></p>
            <p><strong>{props.punchLine}</strong></p>
            <hr />
        </div>
    )
}

export default Joke