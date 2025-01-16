import { useState } from "react"



export default function Player({playerName,symbol,isActive,onPlayerNameChange}){
    const [isEditing,setIsEditing] = useState(false);
    const [enteredPlayerName,setEnteredPlayerName] = useState(playerName);

    function handleEditClick(){
        setIsEditing((isEditing) => !isEditing)
        onPlayerNameChange(symbol,enteredPlayerName)
        
    } 
    function handleChange(event){
        setEnteredPlayerName(event.target.value)
    }

    let playerNameElement =  <span>{enteredPlayerName}</span>;
    if(isEditing){
        playerNameElement = <input type="text" required value={enteredPlayerName}  onChange={handleChange}/>
    }

    return(
        <li className={isActive ? "active" : undefined} >
        <span className="player">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    )
}