import React, { useState } from 'react'
import Choice from './Choice';
import Result from './Result';

function Game({score,setScore}) {

    const [usersChoice, setUsersChoice] = useState("");

    if (usersChoice === "") {
        return (
            <Choice setUsersChoice={setUsersChoice} />
        )
    } else {
        return (
            <div className='w-full h-max'>
                <Result score={score} setScore={setScore} usersChoice={usersChoice} setUsersChoice={setUsersChoice} />
            </div>
        )
    }
}

export default Game