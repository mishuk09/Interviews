import React, { useState } from 'react';
// Create a component that changes its background color when CLicked
const ChangeBgColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('green');
    const changeColor = () => {
        // eslint-disable-next-line no-undef
        const newColor = backgroundColor === 'green' ? 'red' : 'green';
        setBackgroundColor(newColor);


    }
    return (
        <div onClick={changeColor}
            style={{
                // eslint-disable-next-line no-undef
                backgroundColor,
                width: '300px',
                height: '300px'
            }}>

            <h2> Alhamdulillah...!</h2>

        </div>
    );
};

export default ChangeBgColor;