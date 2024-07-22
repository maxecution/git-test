import React from 'react'
import PropTypes from 'prop-types'

const ComponentWithProps = (props) => {
    return (
        <>
            <h1>{props.header}</h1>
            <p>{props.content}</p>
            <p>{props.number} is the magic number.</p>
            <p>{props.nonexistent} This is some more text.</p>
        </>
    )
}

ComponentWithProps.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
}

ComponentWithProps.defaultProps = {
    header: 'Header from defaults',
    content: 'Content from defaults',
    number: 100
}

export default ComponentWithProps