import { use } from 'react';
import { useState } from 'react';
import './food.css';
import Cart from '../cart/cart';
import { SingleFood } from './singlefood';

const Foods = ({ foodPromise }) => {
    const { meals } = use(foodPromise);
    const [cart, setCart] = useState([]);

    const addToCart = (meal) => {
        console.log(meal);
        setCart([...cart, meal]);
    }

    return (
        <section className='food-section'>
            <h1 style={{ textAlign: "center", marginBottom: "30px" }}>All Foods</h1>
            <div className='flex-components'>
                <div className='grid-components'>
                    {meals.map(meal => (
                        <SingleFood addToCart={addToCart} key={meal.idMeal} meal={meal} />
                    ))}
                </div>
                <div className='cart'>
                    <h2>Cart</h2>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </section>
    );
};

export default Foods;