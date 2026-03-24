import { use } from 'react'
import './food.css'
const Foods = ({foodPromise}) => {
    const {meals} = use(foodPromise)
    return (
        <section className='food-section'>
            <h1 style={{
                textAlign : "center",
                marginBottom : "30px"
            }}>All Foods</h1>
            <div className='grid-components'>
                {
                meals.map(meal => (
                <div key={meal.idMeal} className='fool-meals'>
                    <img src={meal.strMealThumb} alt="" />
                    <h2>{meal.strMeal}</h2>
                    <p>{meal.strCategory}</p>
                    <a href={meal.strYoutube} target="_blank" rel="noreferrer">
                                ▶ Watch Recipe
                            </a> <br />
                    <a href= {meal.strSource}>Visit Sources Food</a>
                    <p>{meal.strArea}</p>
                </div>
                ))
            }
            </div>
        </section>
    )
}
export default Foods