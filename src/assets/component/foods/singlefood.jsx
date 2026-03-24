export const SingleFood = ({ meal, addToCart }) => {
    return (
        <div className='fool-meals'>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
            <p>{meal.strCategory}</p>
            <a href={meal.strYoutube} target="_blank" rel="noreferrer">▶ Watch Recipe</a> <br />
            <a href={meal.strSource}>Visit Source</a>
            <p>{meal.strArea}</p>
            <button onClick={() => addToCart(meal)} className="food-btn">Add To Cart</button>
        </div>
    );
};