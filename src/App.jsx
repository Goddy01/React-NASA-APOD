import React, { useEffect, useState } from 'react'
import Main from './components/Main'
import Footer from './components/Footer'
import SideBar from './components/SideBar'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showInfoIcon, setShowInfoIcon] = useState(true)
  
  function handleModalToggle() {
    setShowModal(!showModal)
    setShowInfoIcon(!showInfoIcon)
  }

  useEffect(() => {
    async function fetchNasaAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today...');
        return
      }
      
      function clearSpecificLocalStorage(prefix) {
        // Iterate through all items in localStorage
        for (let i = localStorage.length - 1; i >= 0; i--) {
          const key = localStorage.key(i);
          if (key && key.startsWith(prefix)) {
            localStorage.removeItem(key); // Remove items that start with the specified prefix
          }
        }
      }
      
      // Example usage to clear items starting with "NASA-"
      clearSpecificLocalStorage('NASA-');
      

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Fetched from API today...');
      } catch (error) {
        console.log('ERROR: ', error.message);
        
      }
    }
    fetchNasaAPIData()
  }, [])

  return (
    <>
    {data ? (<Main data={data} />) : 
      (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
        </div>
      )
    }
      {
        showModal && (<SideBar data={data} handleModalToggle={handleModalToggle} showModal={showModal} showInfoIcon={showInfoIcon} />)
      }
      {data && (<Footer data={data} handleModalToggle={handleModalToggle} showModal={showModal} showInfoIcon={showInfoIcon} />)}
    </>
  )
}

export default App
