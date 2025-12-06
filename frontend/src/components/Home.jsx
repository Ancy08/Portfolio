import html from "../assets/html.png"
import css from "../assets/css-3.png"
import js from "../assets/js.png"
import db from '../assets/data-server.png'
import react from "../assets/react.png"
import node from "../assets/node-js.png"
import blog from "../assets/blog.png"
import Footer from "../components/common/Footer"
import { useNavigate } from "react-router-dom"
import task from "../assets/task.jpg"
import weather1 from "../assets/weather1.png"
import movie from "../assets/movie.jpg"
function Home() {
    const Navigate = useNavigate()
    return (
        <div className="mt-4">
            <div className="flex items-center justify-center">
                <div className="w-full sm:w-1/2 flex-col justify-center">
                    <h2 className="text-3xl md:text-6xl font-bold pb-2">Hey! I Am</h2>
                    <h2 className="text-4xl md:text-7xl font-bold text-blue-700 py-2">Ancy Maria</h2>
                    <p className="py-2">I can create stunning websites for your company, Do check my works. I won't disappoint you. Try me for 7 Days before you decide anything</p>
                    <button className="button-style border-none font-bold shadow-lg transition-all duration-500 ease-in-out rounded-md text-white px-3 py-2 bg-[linear-gradient(to_right,#FAA116,#df7320)] hover:bg-[linear-gradient(to_right,#ff5f3e,#fb8c4f)]">Hire me</button>
                </div>
                <div>

                </div>
            </div>
            <div className="mt-4 flex justify-evenly py-6">
                <img src={html} style={{ width: "50px" }}></img>
                <img src={css} style={{ width: "50px" }}></img>
                <img src={js} style={{ width: "50px" }}></img>
                <img src={react} style={{ width: "50px" }}></img>
                <img src={db} style={{ width: "50px" }}></img>
                <img src={node} style={{ width: "50px" }}></img>
            </div>
            <div className="flex flex-col mt-10 items-center justify-around sm:flex-row">
                <div className="flex-col">
                    <div className="mt-4 border-[6px] border-purple-500 p-5 border-t-0 w-60 flex-col items-center">
                        <div className="rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600">6</div>
                        <p>Projects Completed</p>
                    </div>
                    <div className="mt-4 border-[6px] border-green-500 p-5 border-t-0 w-60 flex-col items-center">
                        <div className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-100 to-green-600'>6</div>
                        <p>Months of experience</p>
                    </div>
                </div>
                <div className="ml-4 mt-4 sm:mt-0">
                    <h2 className="text-3xl sm:text-7xl font-bold">My Awesome</h2>
                    <h2 className="text-3xl sm:text-7xl font-bold text-blue-700">Services</h2>
                    <p className="my-2">I have attched my Resume here for your reference </p>
                    <button className="button-style border-none font-bold shadow-lg transition-all duration-500 ease-in-out rounded-md text-white px-3 py-2 bg-[linear-gradient(to_right,#FAA116,#df7320)] hover:bg-[linear-gradient(to_right,#ff5f3e,#fb8c4f)]">Download CV</button>
                </div>
            </div>
            <div>
                <h2 className='text-center text-5xl my-14 font-bold'>Checkout My Live <span className='text-orange-400'>Projects</span> Here</h2>
                <div className='flex justify-around my-5 flex-col sm:flex-row'>


                    <a
                        href="https://task-management-7b3t04k4e-ancys-projects-c2b9a93f.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={task}
                            className='w-64 h-48 object-cover border rounded-md cursor-pointer'
                            alt="task-project"
                        />
                    </a>
                      <a
                        href="https://weather-app-mocha-one-21.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={weather1}
                            className='w-64 h-48 object-cover border rounded-md cursor-pointer'
                            alt="weather-app"
                        />
                    </a>
                    <a
                        href="https://movie-app-six-beta-67.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={movie}
                            className='w-64 h-48 object-cover border rounded-md cursor-pointer'
                            alt="movie-app"
                        />
                    </a>


                </div>
            </div>
            <div>
                <h2 className="text-center text-5xl my-14 font-bold">Checkout My Live <span className="text-blue-400">Projects</span> here</h2>
            </div>
            <div className='flex items-center justify-center my-14'>
                <div className='justify-center hidden sm:block'>
                    <img src={blog} className='w-60 md:w-96 ' alt="Blog Profile Image" />

                </div>
                <div className="w-full sm:w-1/2 flex-col justify-center ml-6">

                    <h2 className="text-3xl md:text-6xl font-bold pb-2">I like to write</h2>
                    <h2 className="text-4xl md:text-7xl font-bold text-blue-500 py-2">Blogs about tech</h2>
                    <p className='py-2'>You can know better about me by reading my blogs here. I share my expertise here.</p>
                    <button className="button-style mt-2 button-style border-none font-bold shadow-lg transition-all duration-500 ease-in-out rounded-md text-white px-3 py-2 bg-[linear-gradient(to_right,#FAA116,#df7320)] hover:bg-[linear-gradient(to_right,#ff5f3e,#fb8c4f)]" onClick={() => Navigate("/blogs")}>Read My Blogs</button>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default Home