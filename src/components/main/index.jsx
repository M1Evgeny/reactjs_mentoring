import React from 'react';
import './Main.css';

export const Main = (props) => {
    return (
        <main className='main'>
            {props.children}
        </main>
    )
}
