import React from 'react'
import logo from '../assest/logo.svg';
import { language } from '../utils/utils';

function Header({score}) {
    return (
        <div className='w-max h-max p-4 flex gap-96 rounded-lg border-4 border-slate-500 items-center'>
            <img src={logo} className="w-40 h-24" alt="logo" />

            <div className='w-max h-max px-8 py-4 bg-white grid gap-2 rounded-lg items-center justify-center'>
                <span className='w-full align-center text-blue-700 text-xl'>{language.includes("tr") ? "Skor" : "Score"}</span>
                <span className='w-full font-bold text-center text-slate-700 text-3xl'>{score}</span>
            </div>
        </div>
    )
}

export default Header