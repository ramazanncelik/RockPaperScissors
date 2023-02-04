import React, { useEffect, useState } from 'react'
import iconPaper from '../../assest/icon-paper.svg';
import iconRock from '../../assest/icon-rock.svg';
import iconScissors from '../../assest/icon-scissors.svg';
import { language } from '../../utils/utils';

function Result({ score, setScore, usersChoice, setUsersChoice }) {

    const [gamesChoice, setGamesChoice] = useState("");
    const [result, setResult] = useState("");
    const [time, setTime] = useState(3);

    const getGameChoice = async () => {
        setTimeout(() => {
            setTime(2);
        }, 1000);
        setTimeout(() => {
            setTime(1);
        }, 2000);
        setTimeout(() => {
            setTime(0);
            const number = Math.floor(Math.random() * 3) + 1;
            if (number === 1) {
                setGamesChoice("rock");
            } else if (number === 2) {
                setGamesChoice("paper");
            } else {
                setGamesChoice("scissors");
            }
        }, 3000);
    }

    const resultCalculate = async () => {
        if (usersChoice === gamesChoice) {
            setResult("draw");
        } else {
            if (usersChoice === "rock" && gamesChoice === "scissors") {
                setResult("win");
                setScore(score + 1);
            } else if (usersChoice === "paper" && gamesChoice === "rock") {
                setResult("win");
                setScore(score + 1);
            } else if (usersChoice === "scissors" && gamesChoice === "paper") {
                setResult("win");
                setScore(score + 1);
            } else if (usersChoice === "rock" && gamesChoice === "paper") {
                setResult("lose");
                setScore(score - 1);
            } else if (usersChoice === "paper" && gamesChoice === "scissors") {
                setResult("lose");
                setScore(score - 1);
            } else if (usersChoice === "scissors" && gamesChoice === "rock") {
                setResult("lose");
                setScore(score - 1);
            }
        }
    }

    const playAgain = async () => {
        if (score === 3 || score === -3) {
            setScore(0);
        }
        setResult("");
        setUsersChoice("");
    }

    useEffect(() => {

        if (gamesChoice !== "") {
            resultCalculate();
        }

        return () => {
            setResult("");
        }
    }, [gamesChoice]);

    useEffect(() => {

        if (usersChoice !== "") {
            getGameChoice();
        }

        return () => {
            setGamesChoice("");
        }
    }, [usersChoice]);


    return (
        <div className='w-full h-max'>
            <div className='w-full h-max p-8 flex gap-36 items-center justify-center'>
                <div className='w-max h-max grid gap-4 items-center justify-center text-white font-bold'>
                    {(usersChoice === "rock" &&
                        <div className='bg-white p-8 rounded-full border-8 border-red-700 shadow-lg shadow-red-800'>
                            <img src={iconRock} className="w-16 h-16" alt="logo" />
                        </div>)
                        || (usersChoice === "paper" &&
                            <div className='bg-white p-8 rounded-full border-8 border-blue-700 shadow-lg shadow-blue-800'>
                                <img src={iconPaper} className="w-16 h-16" alt="logo" />
                            </div>)
                        || (usersChoice === "scissors" &&
                            <div className='bg-white p-8 rounded-full border-8 border-orange-400 shadow-lg shadow-orange-800'>
                                <img src={iconScissors} className="w-16 h-16" alt="logo" />
                            </div>)
                    }
                    <span className='w-full text-center'>
                        {language.includes("tr") ? "Senin Seçimin" : "Your Choice"}
                    </span>
                </div>

                <div className='w-max h-max grid gap-4 items-center justify-center text-white font-bold'>
                    {time === 0 ?
                        (gamesChoice === "rock" &&
                            <div className='bg-white p-8 rounded-full border-8 border-red-700 shadow-lg shadow-red-800'>
                                <img src={iconRock} className="w-16 h-16" alt="logo" />
                            </div>)
                        || (gamesChoice === "paper" &&
                            <div className='bg-white p-8 rounded-full border-8 border-blue-700 shadow-lg shadow-blue-800'>
                                <img src={iconPaper} className="w-16 h-16" alt="logo" />
                            </div>)
                        || (gamesChoice === "scissors" &&
                            <div className='bg-white p-8 rounded-full border-8 border-orange-400 shadow-lg shadow-orange-800'>
                                <img src={iconScissors} className="w-16 h-16" alt="logo" />
                            </div>)
                        :
                        <div className='w-max h-max flex items-center justify-center bg-slate-900 rounded-full border-8 border-slate-700'>
                            <div className='w-32 h-32 flex text-center items-center justify-center'>
                                {time}
                            </div>
                        </div>
                    }
                    <span className='w-full text-center'>
                        {language.includes("tr") ? "Oyunun Seçimi" : "Game's Choice"}
                    </span>
                </div>
            </div>
            <div className='w-full h-max p-6 grid gap-4 items-center justify-center'>
                {(result === "win" &&
                    <span className='text-white font-bold text-3xl text-center'>
                        {score === 3 ?
                            (language.includes("tr") && "Oyunu Kazandın") || ("You Win The Game") :
                            (language.includes("tr") && "Bu Turu Kazandın") || ("You Win This Round")}
                    </span>) ||
                    (result === "lose" &&
                        <span className='text-white font-bold text-3xl text-center'>
                            {score === -3 ?
                                (language.includes("tr") && "Oyunu Kaybettin") || ("You Lose The Game") :
                                (language.includes("tr") && "Bu Turu Kaybettin") || ("You Lose This Round")}
                        </span>) ||
                    (result === "draw" &&
                        <span className='text-white font-bold text-3xl text-center'>
                            {language.includes("tr") ? "Bu Turun Kazananı Yok" : "No Winners This Round"}
                        </span>)}
                {(result !== "" &&
                    <button onClick={() => playAgain()} className='w-full p-4 bg-white font-bold text-blue-600 rounded-lg'>
                        {language.includes("tr") ? "Tekrar Oyna" : "Play Again"}
                    </button>)}
            </div>
        </div>
    )
}

export default Result