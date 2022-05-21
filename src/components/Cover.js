import React from 'react'

export default function Cover(props) {
    return (
        <header className={props.cover}>
            {props.children}
        </header>
    )
}
Cover.defaultProps = {
    cover : 'defaultCover'
}
