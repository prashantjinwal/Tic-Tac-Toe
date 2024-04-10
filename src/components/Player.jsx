import { useState } from "react";

export default function Player({ initialName, symbol }){
    const [playerName , setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);
    const handleButton = () => {
        //setIsEditing(!isEditing);    // works... but not recommeded by react officals
        setIsEditing((editing) => !editing );

    }

    let editablePlayerName =  <span className='player-name' >{playerName}</span>;
    // let btnCaption = 'Edit';
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
        // btnCaption = 'Save';
    }

    function handleChange(event){
        let inputchange = event.target.value;
        setPlayerName(inputchange)
    }

    return(
        <li> 
            <span className="player" >
            { editablePlayerName }  
            <span className='player-symbol' >{symbol}</span>
            </span>
            <button onClick={handleButton}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    ); 
}