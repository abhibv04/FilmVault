import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'  style={{backgroundImage : 'url(https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/6720/1366720-i-c30300a11e8d)'}}>
    <div className='text-white text-2xl text-center w-full bg-gray-900/60 p-4'>Avengers Endgame</div>
    </div>
  )
}

export default Banner