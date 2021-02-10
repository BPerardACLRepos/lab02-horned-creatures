import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <h1>
                    Horned Creatures
                </h1>
                <p>
                    ...and how to filter them
                </p>
            </div>
        );
    }
}