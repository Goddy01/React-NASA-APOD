import React from 'react'
export default function Main(props) {
  const {data} = props
  const imageUrl = data.hdurl
  return (
    <div className='imgContainer'>
      <img src={imageUrl} alt={data.title || 'bg-image'} className='bgImage' />
    </div>
  )
}
