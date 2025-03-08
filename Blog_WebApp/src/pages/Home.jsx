import { useEffect } from "react";
import '../css/Home.css'

function Home() {

    useEffect(() => {
        document.body.className = "home-page";
        return () => { document.body.className = ""; }
    }, []);

    return (
        <div>
        sa
        </div>
    )
}

export default Home