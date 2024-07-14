import { useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11)

    function addTeam(){
        const newTeam =team +1
        setTeam(newTeam)
    }
    function removeTeam(){
        const newTeam =team -1
        setTeam(newTeam)
    }

    const teamStyle ={
        border:'2px solid purple',
        padding:'15px',
        borderRadius:'15px',
        display:'flex',
        justifyItem:'center',
    }
    
    return (
        <div style={teamStyle}>
            <h1 onClick={addTeam}>+</h1>
            <h3 className="playerH3">Players: {team}</h3>
            <h1 onClick={removeTeam}>-</h1>
        </div>
    )
}