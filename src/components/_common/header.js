import React from 'react';


export default (props) => {
    return (
        <header>
            <nav>
                <div className='row'>
                    <img src='img/logo-white.png' alt='Omnifood logo' className='logo' />
                    <img src='img/logo.png' alt='Omnifood logo' className='logo-black' />
                    <ul className='nav'>
                        <li><a href="#features">Food delivery</a></li>
                        <li><a href="#works">How it works</a></li>
                        <li><a href="#cities">Our cities</a></li>
                        <li><a href="#plans">Sign up</a></li>
                    </ul>
                    <a className='mobile-nav-icon js--nav-icon'><i className='ion-navicon-round'></i></a>
                </div>
            </nav>
            <div className='hero-text-box'>
                <h1>Goodbye junk food.<br />Hello super healthy meals.</h1>
                <a className='button button-full js--scroll-to-plans' href='#'>
                    I'm hungry
                </a>
                <a className='button button-border js--scroll-to-start' href='#'>
                    Show me more
                </a>

            </div>
        </header>
    );
}