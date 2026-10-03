function Register() {
  return (
    <div>
      <h1>Create Account</h1>
      <p>Join your campus marketplace.</p>

      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" />

        <br /><br />

        <label>College Email</label>
        <input type="email" placeholder="Enter your college email" />

        <br /><br />

        <label>Password</label>
        <input type="password" placeholder="Create password" />

        <br /><br />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm password" />

        <br /><br />

        <button type="button">Register</button>
      </form>

      <p>Already have an account? Login</p>
    </div>
  )
}

export default Register