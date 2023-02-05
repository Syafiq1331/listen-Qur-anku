import React from 'react'

const Audio = ({ name, audio, diturukan, ayat, key }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl" key={key}>
      <figure className="px-10 pt-10 flex flex-col">
        <p
          className='text-center text-2xl font-bold fontArab'
        >
          {name}
        </p>

        <p
          className='text-md fontArab mt-4'
        >
          {ayat} ayat</p>
        <h2 className="text-lg">
          Diturunkan di{diturukan}
        </h2>
      </figure>
      <div className="card-body items-center text-center">

        <p>
          <audio
            src={audio}
            typeof='audio/mpeg'
            controls
          >play</audio>
        </p>
      </div>
    </div>
  )
}

export default Audio