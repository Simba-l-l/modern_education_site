import React from 'react';


function BtnScrollUp() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
}
function Up_button() {
    return (
        <button onClick={() => { BtnScrollUp() }}>
            наверх
        </button>
    )
}

export default Up_button;