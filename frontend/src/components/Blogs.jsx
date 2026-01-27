import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Footer from './common/Footer';
import auth from '../config/firebase';
import API_URL from '../config/config';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [expandedBlogs, setExpandedBlogs] = useState([]); // <-- FIXED
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const navigate = useNavigate();

    // Toggle Read More / Read Less
    const toggleReadMore = (id) => {
        if (expandedBlogs.includes(id)) {
            setExpandedBlogs(expandedBlogs.filter(blogId => blogId !== id));
        } else {
            setExpandedBlogs([...expandedBlogs, id]);
        }
    };

    // Fetch blogs and check admin
    useEffect(() => {
        window.scrollTo(0, 0);

        auth.onAuthStateChanged((user) => {
            if (user) {
                if (user.uid === "48cqRNFpuGd5ugMjjkPY6jnEFSx2") {
                    setAdmin(true);
                } else {
                    setAdmin(false);
                }
            } else {
                console.log("No user logged in");
            }
        });

        axios.get(`${API_URL}/blogs`)
            .then((res) => {
                setBlogs(res.data);
            })
            .catch(() => {
                console.log("Error fetching blogs");
            });
    }, []);

    // Handle Like
    const handleLike = async (blog_id) => {
        try {
            const response = await axios.patch(`${API_URL}/blogs/like/${blog_id}`);
            if (response.status === 200) {
                const updatedBlogs = await axios.get(`${API_URL}/blogs`);
                setBlogs(updatedBlogs.data);
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    // Handle new blog submission (Admin only)
    const handleNewBlogSubmit = async (event) => {
        event.preventDefault();
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const likes = 0;

        try {
            const response = await axios.post(`${API_URL}/blogs`, { newTitle, newContent, date, likes });
            setBlogs([response.data, ...blogs]);
            setNewTitle('');
            setNewContent('');
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };

    return (
        <div className="blog-section py-14">
            <h2 className="text-center text-5xl font-bold mb-14">
                Latest <span className='text-orange-400'>Blogs</span> 📚
            </h2>

            {/* Admin Blog Creation Form */}
            {admin && (
                <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Blog Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-2 border rounded"
                            required
                        />
                        <textarea
                            placeholder="Blog Content"
                            value={newContent}
                            onChange={(e) => setNewContent(e.target.value)}
                            className="p-2 border rounded"
                            rows="4"
                            required
                        />
                        <button type="submit" className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600">
                            Add Blog
                        </button>
                    </form>
                </div>
            )}

            {/* Blogs List */}
            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                {blogs.map((blog) => {
                    const isExpanded = expandedBlogs.includes(blog._id);
                    const truncatedContent = blog.newContent.length > 150
                        ? blog.newContent.slice(0, 150) + "..."
                        : blog.newContent;

                    return (
                        <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
                            <h3 className="blog-title font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
                            <p className="blog-date text-gray-400 text-sm mb-4">{blog.date}</p>
                            <p className="blog-content text-gray-600 mb-2">
                                {isExpanded ? blog.newContent : truncatedContent}
                            </p>

                            {blog.newContent.length > 150 && (
                                <button
                                    className="text-blue-500 underline text-sm mb-4"
                                    onClick={() => toggleReadMore(blog._id)}
                                >
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            )}

                            <span className="text-blue-500 cursor-pointer" onClick={() => handleLike(blog._id)}>Like</span>
                            <span className="ml-2">{blog.likes} Likes</span>
                        </div>
                    );
                })}
            </div>

            <Footer />
        </div>
    );
}

export default Blogs;
