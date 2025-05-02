import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from 'axios'

const Home = () => {
    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async()=>{
    const response = await axios.get('http://localhost:3000/blog')
    setBlogs(response.data.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])
    return (
        <>
            <Navbar/>
            <div className="p-6 m-2 flex flex-wrap justify-center gap-4 ">
                {
                    blogs.map((blog,index)=>{
                        return(
                            <Card key={index} blog={blog}/>
                        )
                    })
                }
            
            </div>
            
        </>
    )
}

export default Home