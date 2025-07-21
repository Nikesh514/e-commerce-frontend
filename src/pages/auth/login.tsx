import LoginForm from "../../components/forms/auth/login-form"

const Login = () => {

    return (
        <main className="border h-full flex flex-col items-center justify-center  p-3">
            <div className="border border-blue-500 w-[min(100%, 500px)] px-4 py-6 rounded-md">
                {/* page heading */}
                <h1 className="test-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                
                
                {/* login form */}
                <div>
                    <LoginForm/>
                </div>

                <div className="text-center mt-4">
                    <p className="text-gray-600">Forgot your password? <span className="text-blue-500 font-semibold">Reset Password</span></p>
                    <p>Does not have an account? <span className=" text-blue-500 font-semibold ">Sign Up</span></p>
                </div>

            </div>
        </main>
    )

}

export default Login