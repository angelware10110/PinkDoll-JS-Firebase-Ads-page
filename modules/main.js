console.log("test")

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, push } 

from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut

} from
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Your web app's Firebase configuration
import { firebaseConfig } from "./firebase.js"
import { createCategoryForm } from "./createCategoryForm.js"
import { createRegisterLoginForm, createLogOutIcon } from "./registerForm.js"




// Initialize Firebase, database, authentication
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

console.log(app)

//new user registration
const registerNewUser = () => {
    const register_username = document.getElementById('register_username').value;
    const register_email = document.getElementById('register_email').value;
    const register_password = document.getElementById('register_password').value;

    createUserWithEmailAndPassword(auth, register_email, register_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const loginTime = new Date()
            set(ref(database, 'users/' + user.uid), {
                user_email: register_email,
                role: "simple_user",
                user_username: register_username,
                timestamp: ` ${loginTime} `
            });
            console.log('New User created!')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
document.getElementById('signUp').addEventListener('click', registerNewUser);

//log in an existing User
const loginUser = () => {
    const login_email = document.getElementById('login_email').value;
    const login_password = document.getElementById('login_password').value;

    signInWithEmailAndPassword(auth, login_email, login_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const loginTime = new Date()
            update(ref(database, 'users/' + user.uid), {
                timestamp: ` ${loginTime} `

            });
            console.log(user, "Login successful!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
document.getElementById('signIn').addEventListener('click', loginUser);

//geting signed-in user
//creating new categories
const user = auth.currentUser;
console.log(auth)
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
        console.log("useris prisijunges")

        document.getElementById('login-box').remove();
        //if the an user is logged in, the sign out button shall appear
        createLogOutIcon();
        
        document.getElementById('signOut').addEventListener('click', logOut);
    
        //role of an user?
        get(ref(database, 'users/' + user.uid))
            .then((snapshot) => {
                const userData = snapshot.val();
                if (userData.role === "admin") {
                    console.log("You are Admin") 
                    console.log(userData.role);

                    createCategoryForm();
                    const addCategory = (e) => {
                        e.preventDefault();
                        const create_category = document.getElementById('create_category').value;
                        console.log(create_category)
                        const adTime = new Date();
                        
                        push(ref(database, 'categories/' + category.uid), {
                            name: create_category,
                            timestamp: `${adTime}`
                        })
                            .then(console.log( `saved ${create_category}`))
                            .catch((error) => {
                                console.log(error);
                            })}
                            document.getElementById('category').addEventListener('click', addCategory);

                    }
                }
            )
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    } else {
        console.log("useris atsijunge")
        // User is signed out
        // ...
        //cia turi issiremovint ir susikurt user register forma
    }
});

//user sign-out
const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('Sign-out successful!')
    }).catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);
    });
}
