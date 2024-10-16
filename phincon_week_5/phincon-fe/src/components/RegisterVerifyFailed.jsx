import { Link } from "react-router-dom";

const VerifyFailed = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">Verification Failed</h1>
                <p className="text-lg text-gray-700">
                    The token is invalid or has expired. Please request a new verification email.
                </p>
                <Link
                    to="/resend-verification"
                    className="inline-block mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                    Resend Verification Email
                </Link>
            </div>
        </div>
    );
};

export default VerifyFailed;
