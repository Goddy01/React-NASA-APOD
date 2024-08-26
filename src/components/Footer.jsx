import React from 'react'

export default function Footer(props) {
  const {handleModalToggle, showModal, showInfoIcon, data} = props

  
  return (
    <footer>
    <div className='bgGradient'></div>
      
      <div>
        <h1>APOD Project</h1>
        <h2>{data?.title}</h2>
      </div>
      {

        showInfoIcon && 
      (
        <button className='info-icon' onClick={handleModalToggle}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
      )
      }
    </footer>
  )
}
