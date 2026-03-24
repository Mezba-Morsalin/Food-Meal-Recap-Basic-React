import './cart.css';
import { ToastContainer, toast } from 'react-toastify';
const Cart = ({ cart }) => {
    const Order = () => {
        toast("Your Order is SuccessFully Completed");
    }
    return (
        <div className='cart-items'>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.idMeal} className='cart-item'>
                        <img src={item.strMealThumb} alt={item.strMeal} className='cart-img' />
                        <p>{item.strMeal}</p>
                        <button onClick={Order} className='cart-btn'>Order Now</button>
                        <ToastContainer />
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart;