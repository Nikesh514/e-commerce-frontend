import './login.css'

const Register  = () => {
    return (
        <main>
            <h1>
                Login
            </h1>
            {/* from */}
            <div>
                { /* email */}
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                    name = 'email' 
                    id = "email"
                    placeholder = "johndoe@gmai.com"
                    type = "email"
                    />
                </div>
                {/* password */}
                <div className="input-wrapper">
                <label htmlFor="email">Password</label>
                    <input
                    name = 'password' 
                    id = "email"
                    placeholder = "enter your password"
                    type = "password"
                    />
                </div>
            </div>
        </main>
    )
}

export default Register