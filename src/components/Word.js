import React from 'react'
import { Link } from '@reach/router';

function Word(props) {
    return (
        <div>
            <h1>The word is: {props.word} </h1>
        </div>
    )
}

export default Word
