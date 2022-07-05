import { useEffect, useState } from "react";

import './App.css';

function App() {

  const dataCars = [
    {make: 'Volvo', model: 'v40'},
    {make: 'Ferrari', model: 'f50'}
  ]
  const [newCar, setNewCar] = useState(null);

  const [cars, setCars] = useState(dataCars);

  const [bannerShowing, setBannerShowing] = useState(false);
 
  useEffect(() => {
    function showBanner(){
      setBannerShowing(true)
    }
    setTimeout(showBanner, 1000)
  },[])

  useEffect(() => {
    console.log(newCar);
    console.log('newCar changed');
  },[newCar])

  useEffect(() => {
    console.log(cars);
    alert('newCar added');
  },[cars])

  const submitForm = (e) => {
    e.preventDefault();
    // const updatedCars = cars.push({make: newCar, model: null});
    setCars(cars => [...cars, newCar]);

    // setCars(updatedCars);
  }

  return (
    <div className="App">
         <h1>Use Effect demo</h1>

         {cars.map((car, i) => <p key={i}>{car.make} {car.model && car.model}</p>)}

         <p>Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Illum necessitatibus dolorum 
          optio quasi, minima distinctio, voluptate praesentium 
          ea impedit fuga excepturi. Sunt natus ducimus adipisci 
          quis, inventore veniam esse debitis.</p>

          <form onSubmit={submitForm}>
            <label htmlFor="addCar">Add new car</label>
            <input 
            type="text" 
            id="addCar" 
            onChange={
              (e) => setNewCar({...newCar,  make: e.target.value, model: null })
            }
            />
            <button type="submit">Submit</button>
          </form>

         
          {
            bannerShowing ?
            <div className="cta-banner">
              <span>Please sign up to the newsletter</span>
              <button onClick={() => setBannerShowing(false)} >
                X
              </button>
            </div>
            :
            ''
          }
          
    </div>
  );
}

export default App;
