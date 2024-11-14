import React from 'react';


export default function StartBtn(props){

    const initialAction = () => {
        props.actions.initialAction();
    }


    return (
        <button className='start-btn' onClick={() => initialAction()}>Qual a sua dúvida?</button>
    )
}