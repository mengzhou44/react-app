import React from 'react';

import Button from './button';

export default (props) => {
    return (
        <header>
            <nav>
                <div className='row'>
                    <img src='img/logo-white.png' alt='Omnifood logo' className='logo' />
                    <img src='img/logo.png' alt='Omnifood logo' className='logo-black' />
                    <ul className='nav'>
                        <li><a href='#'>Food delivery</a></li>
                        <li><a href='#'>How it works</a></li>
                        <li><a href='#'>Our cities</a></li>
                        <li><a href='#'>Sign up</a></li>
                    </ul>
                    <a className='mobile-nav-icon js--nav-icon'><i className='ion-navicon-round'></i></a>
                </div>
            </nav>
            <div className='hero-text-box'>
                <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                <Button>I'm hungry</Button>
                <Button ghost>Show me more</Button>
            </div>
        </header>
    );
}