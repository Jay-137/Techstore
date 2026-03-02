import { useTheme } from '../context/ThemeContext';
import { useDispatch, useSelector } from 'react-redux';
import { login,logout } from '../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
  // Consume the context
  const { theme, toggleTheme } = useTheme();
  const cartQuantity=useSelector(state=>state.cart.totalQuantity);
  const {isAuthenticated,user}=useSelector(state=>state.auth);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleCartClick = () => {
      if (isAuthenticated) {
        navigate('/cart');
      } else {
        toast.error("Please log in to view your cart!");
      }
    };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
        TechStore
      </Link>
      
      <div className="flex items-center gap-6 font-semibold text-gray-700 dark:text-gray-200">
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
        <button onClick={handleCartClick} className="hover:text-blue-600 dark:hover:text-blue-400">Cart ({cartQuantity})</button>
        <div className="flex items-center gap-4 border-r pr-4 border-gray-300 dark:border-gray-600">
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 dark:text-gray-300">Hi, {user?.name??"Guest"}</span>
              <button onClick={() => dispatch(logout())} className="text-sm font-semibold text-red-500 hover:text-red-600">Logout</button>
            </div>
          ) : (
            <button onClick={() => dispatch(login("Jayanaath"))} className="text-sm font-semibold text-blue-600 hover:text-blue-500">Login</button>
          )}
        </div>
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors cursor-pointer "
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;