import React from 'react';
import './Parallax.css';

const Parallax = (props) => {

    const classes = 'parallax ' + props.className;

    return (
        <div className={classes} style={{ backgroundImage: 'url(' + props.imgurl + ')' }}>
            {props.children}
        </div>
    )
}

export default Parallax