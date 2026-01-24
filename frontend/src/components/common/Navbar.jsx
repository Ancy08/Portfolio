import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import auth from '../../config/firebase'
import { signOut } from 'firebase/auth'
import { useState } from "react"
function Navbar() {
    const navigate = useNavigate()
    const [log, setLog] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.log("User logged in")
                setLog(true)
            }
            else {
                console.log("Login failed")
                setLog(false)
            }
        })
    }, [])
    function logout() {
        signOut(auth)
    }
    return (
        <div className="py-5 flex justify-between items-center">
            <h1 className="text-2xl font-bold" >Personal</h1>
            <div className="flex items-center">
                <Link className="list-none px-5" to={"/home"}>Home</Link>
                <Link className="list-none px-5" to={"/blogs"}>Blogs</Link>
                <Link className="list-none px-5" to={"/about"}>About</Link>
                {log ? <button className="button-style hidden md:block px-5 py-2.5 rounded-md 
                   text-white font-bold text-base 
                   bg-gradient-to-r from-[#FAA116] to-[#df7320] 
                   shadow-md 
                   transition-all duration-300 
                   hover:from-[#ff5f3e] hover:to-[#fb8c4f] 
                   hover:shadow-lg" onClick={logout}>Logout</button> : 
                   <button className="button-style hidden md:block px-5 py-2.5 rounded-md 
                   text-white font-bold text-base 
                   bg-gradient-to-r from-[#FAA116] to-[#df7320] 
                   shadow-md 
                   transition-all duration-300 
                   hover:from-[#ff5f3e] hover:to-[#fb8c4f] 
                   hover:shadow-lg" onClick={() => navigate("/login")}>Login</button>}
            </div>
        </div>
    )
}
export default Navbar