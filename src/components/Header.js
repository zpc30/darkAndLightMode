import React from 'react';

function Header(props) {
    return (
        <header className= {props.light ? 'lightHeader' : "header"}>
            <img src='logo192.png' />
            <h3>ReactFacts</h3>
            <div>
                <div className={props.light ? 'lightNavMenu' : 'navMenu'} onClick={props.handleChange}>
                    <p>dark</p>
                    <div style={{left: props.light ? '60%' : '1%'}} ></div>
                    <p>light</p>
                </div>
            </div>
        </header>
    )
}

export default Header;