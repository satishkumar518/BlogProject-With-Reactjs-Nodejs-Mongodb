import Card from "../components/Card"
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="m-2 flex flex-wrap space-x-2">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </>
    )
}

export default Home