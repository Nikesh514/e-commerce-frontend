import LoginForm from "../../components/forms/auth/login-form"

const Login = () => {

    return (
        <main className="border h-full flex flex-col items-center justify-center gap-4 p-4">
            <div className="border border-blue-500 w-full px-4 py2 rounded-md">
                {/* page heading */}
                <h1 className="test-3xl font-bold text-center text-gray-800 mb-6">Login</h1>
                
                
                {/* login form */}
                <div>
                    <LoginForm/>
                </div>
            </div>
        </main>
    )

}

export default Login