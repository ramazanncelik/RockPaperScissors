import React from 'react'
import iconPaper from '../../assest/icon-paper.svg';
import iconRock from '../../assest/icon-rock.svg';
import iconScissors from '../../assest/icon-scissors.svg';

function Choice({ setUsersChoice }) {
  return (
    <div className='w-full h-max'>
      <div className='w-full h-max p-8 flex gap-36 items-center justify-center'>
        <button onClick={() => setUsersChoice("paper")} className='bg-white p-8 rounded-full border-8 border-blue-700 shadow-lg shadow-blue-800'>
          <img src={iconPaper} className="w-16 h-16" alt="logo" />
        </button>
        <button onClick={() => setUsersChoice("scissors")} className='bg-white p-8 rounded-full border-8 border-orange-400 shadow-lg shadow-orange-800'>
          <img src={iconScissors} className="w-16 h-16" alt="logo" />
        </button>
      </div>

      <div className='w-full h-max p-6 flex items-center justify-center'>
        <button onClick={() => setUsersChoice("rock")} className='bg-white p-8 rounded-full border-8 border-red-700 shadow-lg shadow-red-800'>
          <img src={iconRock} className="w-16 h-16" alt="logo" />
        </button>
      </div>
    </div>
  )
}

export default Choice