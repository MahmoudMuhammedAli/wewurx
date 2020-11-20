import React from 'react';
import Styles from './letterfilterbar.module.scss';

const Letters = props => {
    const renderLetters = ()=> {
        const letters = [];
        for(let i = 65; i < 65+26; i++){
            letters.push(
            <button className = {`${Styles.letters__button} ${Styles.letters__buttonLetter}`} key = {i}>
                {String.fromCharCode(i)}
            </button>
            );
        }
        return letters;
    }
    return (
        <div className = {`${Styles.letters}`}>
            {renderLetters()}

            <button 
                className = 
                    {`${Styles.letters__button} ${Styles.letters__buttonAll}`}
            >
                All
            </button>
        </div>
    )
}
export default Letters;