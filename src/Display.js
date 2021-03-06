import React, { useEffect, useState, useRef } from 'react'
import './App.css'

function Display({ bank }) {
  let pads = bank.map((pad) => {
    return <DrumPad trigger={pad.trigger} id={pad.id} source={pad.source} />
  })

  return <div id="display">{pads}</div>
}

function DrumPad({ id, trigger, source }) {
  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    console.log('effect')
    return () => {
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  const handleKey = (e) => {
    if (e.key.toUpperCase() === trigger) {
      playSound()
    }
  }

  const playSound = () => {
    const audio = document.getElementById(trigger)
    console.log(audio)
    audio.load()
    audio.play()
  }

  return (
    <button onClick={playSound}>
      <audio className="clip" id={trigger} src={source} type="audio/wav" />
      {trigger}
    </button>
  )
}

export default Display
