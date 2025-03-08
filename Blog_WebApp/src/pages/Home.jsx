import { useCallback, useEffect } from "react";
import '../css/Home.css'
import { useNavigate } from "react-router-dom"

function Home() {

    const navigate = useNavigate();

    const setUserActive = useCallback(() => {
        const response = localStorage.getItem("webappjwttoken")
        if (!response) {
            navigate("/login")
        }
    },[navigate])

    useEffect(() => {
        setUserActive();
    }, [setUserActive]);

    useEffect(() => {
        document.body.className = "home-page";
        return () => { document.body.className = ""; }
    }, []);

    return (
        <div className="container">
            sa
        </div>
    )
}

export default Home