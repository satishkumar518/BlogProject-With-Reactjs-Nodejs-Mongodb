import React from 'react';
import { Link } from "react-router-dom"

const Card = ({ blog }) => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/5 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
            <Link to={"http://localhost:5173/single-blog/"+blog._id}>
                <div className="flex items-center mb-6">
                    <img src={"http://localhost:3000/" + blog.image} alt="Harsh image" className="rounded-lg w-full object-cover" />
                </div>
                <div className="block">
                    <h4 className="font-bold text-xl">{blog.title}</h4>
                    <h6 className="text-sm text-gray-500">{blog.subtitle}</h6>
                    <h2 className="text-gray-900 font-medium leading-8 mb-2">{blog.content}</h2>
                    <p className="text-gray-600 mb-1">{blog.description}</p>
                    <div className="flex items-center justify-between  font-medium">
                        <h6 className="text-sm text-gray-500">By {blog.author_name}</h6>
                        <span className="text-sm text-indigo-600">{currentYear}</span>
                    </div>
                </div>
          </Link>
             </div>
        </>


    )
}

export default Card