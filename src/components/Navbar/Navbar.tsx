import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../Logo/Logo.tsx";
import Button from "../Buttons/Button.tsx";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/Store.ts";
import { useAppDispatch } from "../../redux/Hooks";
import { userLogOut } from "../../redux/authSlice";

export default function Navbar() {
    const { loggedInUser } = useSelector((state: RootState) => state.user);
    const dispatch = useAppDispatch();
    const { cart } = useSelector((state: RootState) => state.cart);
    const cartItemCount = cart?.length ?? 0;

    const navigate = useNavigate();

    function handleNavigate(path: string) {
        navigate(path);
    }

    function handelLogOut() {
        dispatch(userLogOut());
        localStorage.removeItem("loggedInUser");
        navigate("/");
    }






    return (
        <>
            <nav className="  py-4 shadow-sm fixed top-0 left-0 right-0 z-50 bg-background">
                <div className="container">
                    <div className="navbar px-0 py-0 ">
                        <div className="navbar-start ">

                            <Link to="/" className=" flex items-center justify-between text-xl "><Logo size="sm" /> <span className="logo text-primary hover:text-secondary text-4xl font-bold ">Byze</span> </Link>
                        </div>

                        <div className="navbar-center hidden lg:flex">
                            <ul className="flex items-center justify-between gap-6">
                                <li><NavLink className=" text-text-3 capitalize font-semibold text-lg" to='/'>home</NavLink></li>
                                <li><NavLink className="text-text-3 capitalize font-semibold text-lg" to='/products'>products</NavLink></li>
                                <li><NavLink className="text-text-3 capitalize font-semibold text-lg" to='/about'>about</NavLink></li>
                                <li><NavLink className="text-text-3 capitalize font-semibold text-lg" to='/contact'>contact</NavLink></li>

                            </ul>
                        </div>


                        <div className="navbar-end">

                            <div className="buttons hidden lg:flex items-center justify-between gap-4 ">

                                {!loggedInUser && <>

                                    <Button onClick={() => handleNavigate('/login')} type="secondary" text="log in" size="md" />
                                    <Button onClick={() => handleNavigate('/register')} type="primary" text="register" size="md" />

                                </>}

                                {loggedInUser && <>
                                    <div className="relative inline-block">
                                        <Button
                                            type="icon"
                                            size="md"
                                            className="p-0!"
                                            icon={<i className="fa-solid fa-cart-arrow-down"></i>}
                                            onClick={() => navigate("/cart")}
                                        />
                                        <span className="absolute -top-1 -right-1 bg-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs z-10">
                                            {cartItemCount}
                                        </span>
                                    </div>

                                    <Link onClick={handelLogOut} to="/" className="log-out">
                                        <span className="text-red-700 font-semibold text-lg"><i className="fa-solid fa-right-from-bracket"></i> log out</span>
                                    </Link>
                                </>}





                            </div>

                            <div className="dropdown">

                                <div tabIndex={0} role="button" className="relative lg:hidden text-primary hover:text-secondary"> 
                                    <Button size="sm" type="icon" className="p-0! px-0! py-0!" icon={<i className="fa-solid fa-bars"></i>} />
                                </div>


                                <ul
                                    tabIndex={-1}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/products">Products</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    {loggedInUser && <li className="text-secondary"><Link to="/cart">cart</Link></li>}
                                </ul>


                            </div>


                        </div>

                    </div>
                </div>
            </nav>


        </>
    )
}
