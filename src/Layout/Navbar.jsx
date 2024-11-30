import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { HiOutlineMenu } from "react-icons/hi";
const Navbar = () => {
  const [menu, setMenu] = useState(true)
  const {user, loading, signOutUser} = useContext(AuthContext)
  const handleSignOut = () => {
    if(user){
      signOutUser()
        .then(() => console.log("successfully log out"))
        .catch((error) => console.log(error.message))
    }
}
  return (
    <div className="bg-[#f1f1f1] bg-opacity-50 text-black text-opacity-75">
        <div className="flex justify-between items-center py-6 px-5 xl:px-0 xl:max-w-[1170px] mx-auto">
            <Link to={'/'} className="drop-shadow-2xl font-bold flex items-center"><img className="w-7 h-7" src="/logoText.png" alt="" /><h3 className="text-[#575d90] text-2xl">EcoUnity</h3></Link>
            <ul className="text-lg gap-x-6 hidden md:flex">
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/availableFood'}>Available Food</NavLink></li>
                <li><NavLink to={'/addFood'}>Add Food</NavLink></li>
                <li><NavLink to={'/myFood'}>My Food</NavLink></li>
                <li><NavLink to={'/myFoodRequest'}>My Food Request</NavLink></li>
                <li><NavLink to={'/signIn'}>Sign In</NavLink></li>
            </ul>
            <div className="flex items-center gap-x-3">
                <Link to={!user && '/signIn'} onClick={handleSignOut} className="hidden sm:flex px-4 btn bg-primary text-white hover:shadow-xl active:shadow-inner">{user ? 'Sign Out' : 'Sign in'}</Link>
                <div>
                  <button onClick={()=> setMenu(!menu)} className="flex md:hidden px-4 btn btn-primary"><HiOutlineMenu /></button>
                  <div style={{ zIndex: 50 }} className={`px-6 bg-white text-center absolute top-20 right-6 rounded-2xl ${menu ? 'hidden' : 'inline-flex'} `}>
                    <ul className="text-lg gap-x-6">
                      <li onClick={() => setMenu(true)}><Link to={'/'}>Home</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/availableFood'}>Available Food</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/addFood'}>Add Food</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/myFood'}>My Food</Link></li>
                      <li onClick={() => setMenu(true)}><Link to={'/myFoodRequest'}>My Food Request</Link></li>
                      <li className="sm:hidden"><Link to={!user && '/signIn'} onClick={handleSignOut}>{user ? 'Sign Out' : 'Sign in'}</Link></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
        <hr />
    </div>
  );
};

export default Navbar;