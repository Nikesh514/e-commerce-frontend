


const LoginForm = () => {
  return (
    <div>
        <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                {/* email */}
                <div className="flex flex-col gap-1">
                    <label 
                        className="text-xl font-semibold text-gray-700"
                        htmlFor={"email"}>Email</label>
                    <input 
                    className="border border-grey-300 rounded-md p-2 placeholder:text-sm text-lg focus:outline-blue-500"
                    placeholder="johndoe@gmail.com"
                    type={'email'}
                    name="email"
                    id={'email'}
                    />
                </div>

                {/* password */}
                <div className="flex flex-col gap-1">
                    <label 
                        className="text-xl font-semibold text-gray-700"
                        htmlFor={"password"}>Password</label>
                    <input
                    className="border border-grey-300 rounded-md p-2 placeholder:text-sm text-lg focus:outline-blue-500"
                    placeholder="enter your password"
                    type={'password'}
                    name="password"
                    id={'password'}
                    />
                </div>
            </div>

            <button 
            className="bg-blue-500 w-full p-2 rounded-md text-white test-lg font-semibold hover:bg-blue-600 cursor-pointer transition-all duration-300"
            type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm