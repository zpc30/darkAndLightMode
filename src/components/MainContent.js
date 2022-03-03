import React from 'react';

function MainContent(props) {
    return (
        <div className={props.light ? 'lightMain' : 'main'}>
            <h1>Fun fact with React</h1>
            <img src='./logo192.png' />
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originali created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintaned by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default MainContent;