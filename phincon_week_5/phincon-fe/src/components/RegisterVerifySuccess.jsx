import { Link } from "react-router-dom";

const VerifySuccess = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-green-600 mb-4">Email Verified Successfully!</h1>
                <p className="text-lg text-gray-700">
                    Your email has been verified. You can now log in to your account.
                </p>
                <Link
                    to="/login"
                    className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                    Go to Login
                </Link>
            </div>
        </div>
    );
};

export default VerifySuccess;
