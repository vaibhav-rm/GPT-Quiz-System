const firebaseConfig = {
  apiKey: "AIzaSyDtWAZFiCxDlvdtLuQoum7l7I4GuNz-o0A",
  authDomain: "userdb120csq.firebaseapp.com",
  databaseURL: "https://userdb120csq-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "userdb120csq",
  storageBucket: "userdb120csq.appspot.com",
  messagingSenderId: "517950312976",
  appId: "1:517950312976:web:ead975364184926d453095"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
const submitButton = document.getElementById("submit");
const createacctbtn = document.getElementById("create-acct-btn");
const forgetBtn = document.querySelector(".forget-btn");

var registerNumber, password, userId;

createacctbtn.addEventListener("click", function () {
  // TODO: Implement registration functionality
});

submitButton.addEventListener("click", function () {
  registerNumber = document.getElementById("register-number").value;
  password = document.getElementById("password").value;

  // Retrieve the password associated with the user's register number from the database
  database.ref("/users/" + registerNumber + "/password").once("value").then((snapshot) => {
    const storedPassword = snapshot.val();

    if (password === storedPassword) {
      // Passwords match, user is authenticated
      console.log("Success! Welcome back!");
      sessionStorage.setItem("userId", registerNumber);
      location.replace("./start.html");
    } else {
      // Passwords don't match, show error message
      console.log("Incorrect password");
      window.alert("Incorrect password");
    }
  })
  .catch((error) => {
    console.log(error);
    window.alert("Error occurred. Please try again later.");
  });
});

forgetBtn.addEventListener("click", function () {
  registerNumber = document.getElementById("register-number").value;

  // TODO: Implement password reset functionality
});