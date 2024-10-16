import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoPhinconAcademy from "@/assets/logo-phincon-academy.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [validateRepeatPassword, setValidateRepeatPassword] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setValidateRepeatPassword(true);
            if (password !== repeatPassword) {
                setValidateRepeatPassword(false);
                return;
            }
            console.log(import.meta.env.VITE_BASE_API_URL);
            const body = {
                fullname: fullname,
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
            };
            setIsLoading(true);
            const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const json = await response.json();
            const code = json.code;
            if (code !== 201) {
                console.log(json);
                setIsLoading(false);
                if (json.message) {
                    toast.error(json.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                }
                json.details?.map((detail) => {
                    toast.error(detail.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                    });
                });
                return;
            }
            toast.success(json.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                onClose: () => {
                    navigate("/login");
                },
            });
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex pt-5 pb-5 justify-center items-center bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 m-10">
                <div className="flex flex-col items-center">
                    <img src={logoPhinconAcademy} alt="Phincon Academy Logo" className="w-100" />
                </div>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Fullname <label className="text-xs text-blue-400">(min 5 and max 30 characters)</label>
                        </label>

                        <input
                            type="text"
                            id="fullName"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Username <label className="text-xs text-blue-400">(min 5 and max 10 characters)</label>
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password{" "}
                            <label className="text-xs text-blue-400">
                                (min 8 and max 30 characters, with at least contains upper, lower, number, and special
                                characters)
                            </label>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Repeat Password
                        </label>
                        {!validateRepeatPassword ? (
                            <div className="text-xs text-red-600">Password didn&apos;t match</div>
                        ) : (
                            ""
                        )}
                        <input
                            type="password"
                            id="repeat-password"
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                    </div>
                    {isLoading ? (
                        <div className="flex justify-center items-center mb-5">
                            <ReactLoading type="spinningBubbles" color="#0000FF" />
                        </div>
                    ) : (
                        ""
                    )}
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 ${
                            isLoading ? "bg-gray-700" : "bg-blue-600"
                        } text-white rounded-md hover:bg-blue-400 focus:outline-none  font-bold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                        disabled={isLoading ? true : false}
                    >
                        Register
                    </button>
                </form>
                <div className="mt-5 text-center">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-400 font-bold hover:text-green-800">
                        Login Here
                    </Link>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition:Bounce
            />
        </div>
    );
};

export default Register;
