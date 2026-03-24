import Navbar from './assets/component/navbar/navbar'
import './App.css'
import { Suspense } from 'react'
import Foods from './assets/component/foods/food'

const foodPromise = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
.then(res => res.json())
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback = {<h3>Loading All Foods</h3>}>
      <Foods foodPromise = {foodPromise} key={foodPromise.idMeal}></Foods>
    </Suspense>
    </>
  )
}

export default App
