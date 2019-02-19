import React from 'react';
import classes from './Blog.module.scss';

const blog = (props) => {
    return (
        <a href={props.link} className={classes.Blog}> <div > 
            <img src={props.image} alt={props.imageAlt}/>
            <p> {props.categories} </p>
            <h3> {props.title} </h3>
        </div>
        </a>
    )
}

export default blog;