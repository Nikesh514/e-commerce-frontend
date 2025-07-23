import RegisterForm from "../../components/forms/auth/register-form"

const Register = () => {

    return (
        <main className="border h-full flex flex-col items-center justify-center p-3">
            <div className="border border-blue-500 w-[min(100%, 500px)] px-4 py-6 rounded-md">
                {/* page heading */}
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>

                {/* register form */}
                <div>
                    <RegisterForm/>
                </div>

                <div className="text-center mt-4">
                    <p className="text-gray-600">Already have an account? <span className="text-blue-500 font-semibold">Login</span></p>
                </div>
            </div>
        </main>
    )
}

export default Register
