import React from 'react';
import classes from './Banner.module.scss';

const Banner = (props) => {
    return (
        <div className={classes.Banner}>
            <img src={props.image} />
            <h1> { props.children }</h1>
        </div>
    );
}

export default Banner;