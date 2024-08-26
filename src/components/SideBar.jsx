import React from 'react'

export default function SideBar(props) {
  const {handleModalToggle, showModal, data} = props
  return (
    <div className='sidebar'>
        <div className='bgOverlay'></div>
            <div className='sidebarContents'>
                <h2>{data?.title}</h2>
                <div className='sidebar-content-desc'>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleModalToggle} className='arrow-right'>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
    </div>
  )
}
