import React, { useEffect } from 'react';
import './PageNotFound.css';

const PageNotFound = (props) => {
    useEffect(() => {
        props.setShowNavbar(false);
    }, []);
    return (
        <div>
            404
        </div>
    )
}
export default PageNotFound