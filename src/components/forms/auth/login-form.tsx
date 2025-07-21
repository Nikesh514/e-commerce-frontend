


const LoginForm = () => {
  return (
    <div>
        <form>
            <div>
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
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input
                    placeholder="enter your password"
                    type={'password'}
                    name="password"
                    id={'password'}
                    />
                </div>
            </div>

            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginForm