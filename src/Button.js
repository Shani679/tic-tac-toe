import React, { memo } from 'react';

export const MyButton = memo((props) => {
    console.log("button")
    return <button onClick={props.onClick}>test</button>
})