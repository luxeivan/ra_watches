import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import './App.css';
import ManagmentWatches from './components/ManagmentWatches';
import Watches from './components/Watches';

function App() {
  const [watches, setWatches] = useState({})
  useEffect(() => {
    const id = setTimeout(() => {
      const newWatches = { ...watches }
      Object.keys(newWatches).length !== 0 && Object.keys(newWatches).forEach(key => {
        let currentDate = new Date();
        currentDate = (currentDate.valueOf() + currentDate.getTimezoneOffset() * 60000) + watches[key].zone * 3600000;
        newWatches[key].time = currentDate
      })
      setWatches(newWatches)
    }, 1000)
    return ()=>clearTimeout(id)
  },[watches])

  const handlerAdd = event => {
    event.preventDefault()
    let currentDate = new Date();
    currentDate = (currentDate.valueOf() + currentDate.getTimezoneOffset() * 60 * 1000) + event.target[1].value * 3600 * 1000;
    const newID = nanoid();
    const newWatches = { ...watches }
    newWatches[newID] = { name: event.target[0].value, zone: event.target[1].value, time: currentDate}
    setWatches(newWatches)
  }
  const handlerDel = event => {
    const newWatches = {...watches}
    delete newWatches[event.target.dataset.id]
    setWatches(newWatches)
  }
  return (
    <div className="App">
      <ManagmentWatches addFunc={handlerAdd} />
      <div className='watches__area'>
        {Object.keys(watches).length !== 0 && Object.keys(watches).map(item => <Watches id={item} time={watches[item]} delFunc={handlerDel} key={item} />)}

      </div>
    </div>
  );
}

export default App;
