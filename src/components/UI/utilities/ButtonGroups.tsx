import React from 'react';

const ButtonGroups = (props: {className:string; children: string; onClick: () => void}) => {
    return (
        <button onClick={props.onClick} className={props.className}>{props.children}</button>
    );
};

export default ButtonGroups;