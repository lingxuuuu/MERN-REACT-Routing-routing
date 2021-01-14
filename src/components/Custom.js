import React from 'react'
import { Link } from '@reach/router';

function Custom(props) {
    return (
        <div>
            <h1 style ={ {backgroundColor: props.background, color: props.color } } >The word is hello </h1>
        </div>
    )
}

export default Custom
