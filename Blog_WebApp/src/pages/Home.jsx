import { useCallback, useEffect } from "react";
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

    return (
        <>
        </>
    )
}

export default Home