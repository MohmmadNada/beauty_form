class User {
  constructor(email, username, password, country, gender) {

      this.email = email;
      this.username = username;
      this.password = password;
      this.country = country;
      this.gender = gender;
      User.addUserToLocalStorage(this)
    }
  
  static addUserToLocalStorage(user) {
    let userSerialized = JSON.stringify(user); 
    localStorage.setItem("User", userSerialized);
    }
  }
  
  export default User;