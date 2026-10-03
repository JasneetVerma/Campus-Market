function Login() {
  return (
    <div>
      <h1>Welcome Back</h1>
      <p>Login to your Campus Marketplace account.</p>

      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <br /><br />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <br /><br />

        <button type="button">Login</button>
      </form>

      <p>Don't have an account? Register</p>
    </div>
  )
}

export default Login