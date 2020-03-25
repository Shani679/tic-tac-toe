import React, { memo } from 'react';

export const Square = memo(({value, onClickHandler, index}) => {
    console.log("square")
    return (
        <div onClick={() => onClickHandler(index)}>{value}</div>
    )
})