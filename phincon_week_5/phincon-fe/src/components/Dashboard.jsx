import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const userCookie = Cookies.get("user");
        console.log(JSON.parse(userCookie));
        if (!userCookie) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <div>
            <h1>Selamat Datang di Dashboard</h1>
        </div>
    );
};

export default Dashboard;
