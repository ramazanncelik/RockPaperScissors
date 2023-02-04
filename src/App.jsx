import React, { useState } from 'react'
import Game from './Components/Game/Game';
import Header from './Components/Header'
import { language } from './utils/utils';
import gameRules from './assest/game-rules.svg';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';

function App() {

  const [score, setScore] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className='w-full h-screen grid gap-2 bg-slate-800 p-8 justify-center select-none'>

      <Header score={score} />
      <Game score={score} setScore={setScore} />


      <button onClick={() => setIsModalVisible(true)} data-modal-target="staticModal" data-modal-toggle="staticModal" className='w-24 bg-bone p-3 text-slate-500 rounded-lg border-2 border-slate-500 absolute right-4 bottom-4'>
        {language.includes("tr") ? "Kurallar" : "Rules"}
      </button>

      <PureModal
        header={language.includes("tr") ? "Kurallar" : "Rules"}
        isOpen={isModalVisible}
        closeButton="X"
        closeButtonPosition="bottom"
        onClose={() => {
          setIsModalVisible(false);
          return true;
        }}
      >
        <div className='w-full h-max flex items-center justify-center'>
          <img src={gameRules} className="w-full h-64" alt="gameRule" />
        </div>
      </PureModal>;
    </div>
  )
}

export default App