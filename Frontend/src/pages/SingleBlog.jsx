import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import axios from "axios"

const SingleBlog = () => {
    const {id} =useParams()
    const [blog,setBlog] = useState({})
    const singleBlog = async()=>{
    const response = await axios.get('http://localhost:3000/blog/'+id)
    setBlog(response.data.data)
    }
    useEffect(()=>{
        singleBlog()
    },[])

    return (
        <>
            <Navbar />

            {/* <!-- Blog post with featured image --> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* <!-- Blog post header --> */}
                    <div className="py-8">
                        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                        <p className="text-gray-500 text-sm">Published on 2024</p>
                        <p className="text-gray-500 text-sm">By {blog.author_name}</p>
                        <p className="text-gray-500 text-sm">{blog.subtitle}</p>

                    </div>

                    {/* <!-- Featured image --> */}
                    <img src={'http://localhost:3000/'+blog.image} alt="Featured image" className="w-full h-auto mb-8"/>

                        {/* <!-- Blog post content --> */}
                        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                            {blog.content}
                        </div>
                        <p>{blog.description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleBlog