import React from 'react';
import Blogs from '../components/Blogs/Blogs';
import axios from 'axios';
import Banner from '../components/Banner/Banner';

axios.defaults.baseURL = "https://visibleone.com/wp-json/wp/v2";

export default class Layout extends React.Component {
    render() {
        return(
            <>
            <Banner image='https://i1.wp.com/visibleone.com/wp-content/uploads/2019/01/web-development.jpg?fit=1024%2C288&ssl=1'> OUR BLOGS </Banner>
            <Blogs />
            </>
        )
    }
}
