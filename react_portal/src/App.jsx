import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import PortalExample from './components/PortalExample'
const App = () => {
  const[toast,setToast]=useState("")
  function ChangeData(){
    setToast("item added to cart")
    setTimeout(() => {
      setToast("")
    }, 2000);
  }
  return (
    <div>
      {/* <h1>hello</h1> */}
      <button onClick={ChangeData}>add item</button>
      {toast && <PortalExample a={toast}/>}
    </div>
  )
}

export default App
