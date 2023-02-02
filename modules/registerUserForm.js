const createRegisterLoginForm = () => {

    document.getElementById('root').innerHTML = `
    <div id="login-box" class="login-box">
    <div class="left" id="user_register">
          <!-- register -->
          <h1 id='status'>Register</h1>
          <form>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="register_email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="register_password">
            </div>
            <button type="submit" id="signUp" name="signup_submit" value="Sign Up" class="btn">Log-in</button>
          </form>
        </div>
        
        <div class="right" id="user_login">
          <!-- Login -->
          <h1 >Login</h1>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="login_email" aria-describedby="emailHelp">
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="login_password">
            </div>
            <button type="submit" id="signIn" value="Sign In" name="signup_submit" value="Sign Up" class="btn">Sign-in</button>
            <!-- <button type="submit" id="signOut" value="Sign Out" name="signup_submit" value="Sign Up" class="btn">Sign-Out</button> -->
          </form>
        </div>
      </div>
    `
    
}

const createLogOutIcon = () => {
    document.getElementById('root').innerHTML = ` 
            <div class="row">
                <div class="offset-11 col-1">
                    <i class="bi bi-arrow-through-heart" id="signOut"></i>
                </div>
            </div>
    `
}


export { createRegisterLoginForm, createLogOutIcon }





