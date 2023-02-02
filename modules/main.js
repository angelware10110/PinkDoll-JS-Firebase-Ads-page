console.log("test")

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { 
        getDatabase,
        set, 
        update, 
        ref, 
        get, 
        push,
        onValue,
        remove
    } 

from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut

} from
    "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import { firebaseConfig } from "./firebase.js" //  web app's Firebase configuration
import { createCategoryForm } from "./createCategoryForm.js"
import { createRegisterLoginForm, createLogOutIcon } from "./registerUserForm.js"
import { createProductForm } from "./createProductForm.js"


// Initialize Firebase, database, authentication
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
// console.log(app)

createRegisterLoginForm();

//new user registration
const registerNewUser = () => {
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
                    console.log("You are Godess") 
                    console.log(userData.role);
                    createCategoryForm();
                    const addCategory = (e) => {
                        e.preventDefault();
                        const create_category = document.getElementById('create_category').value;
                        console.log(create_category)
                        const adTime = new Date();
                        push(ref(database, 'categories/'), {
                            name: create_category,
                            timestamp: `${adTime}`
                        })
                            .then(console.log( `saved ${create_category}`))
                            .catch((error) => {
                                console.log(error);
                            })}
                            document.getElementById('category').addEventListener('click', addCategory);

                            onValue(ref(database, "categories/"), (snapshot) => {
                                let categories = snapshot.val()
                                let categoriesTable = document.getElementById("table");
                                categoriesTable.innerHTML = "";
                                let thRow = document.createElement("thead");
                                thRow.innerHTML = `
                                                <tr class="my-3">
                                                    <th scope="col">Category name</th>
                                                    <th scope="col">Kill</th
                                                </tr>
                                `
                                categoriesTable.appendChild(thRow);
                                for (let i in categories) {
                                    let categoriesTr = document.createElement("tr");
                                    categoriesTr.className = "table-secondary";
                                    let categoriesTd = document.createElement("td");
                                    categoriesTd.innerText = categories[i].name;
                                    let categoryTd = document.createElement("td");
                                    let categoryDelete = document.createElement("button");
                                    categoryDelete.classList.add("btn", "btn-outline-danger");
                                    categoryDelete.textContent = "Kill";
                                    categoryTd.appendChild(categoryDelete);

                                    function deleteCategory() {
                                        remove(ref(database, "categories/" + i))
                                        console.log("Category removed");
                                    }

                                    categoryDelete.parentNode.addEventListener("click", deleteCategory);

                                    categoriesTr.appendChild(categoriesTd);
                                    categoriesTr.appendChild(categoryTd);
                                    categoriesTable.appendChild(categoriesTr);
                                 
                                }
                         })
                         
                         
                } else {
                        console.log("You are Fallen Angel") 
                        console.log(userData.role);

                        createProductForm();
                        const addAd = (e) => {
                            e.preventDefault();

                            const create_ad = document.getElementById('create_ad').value;
                            console.log(create_ad)

                            const adTime = new Date();

                            push(ref(database, 'ads/'), {
                                name: create_ad,
                                timestamp: `${adTime}`
                            })
                                .then(console.log( `saved ${create_ad}`))
                                .catch((error) => {
                                    console.log(error);
                                })}
                                document.getElementById('ad').addEventListener('click', addAd);

                                onValue(ref(database, "ads/"), (snapshot) => {
                                    let ads = snapshot.val()

                                    let adsTable = document.getElementById("table");
                                    adsTable.innerHTML = "";
                                    let thRow = document.createElement("thead");
                                    thRow.innerHTML = `
                                                    <tr class="my-3">
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Kill</th
                                                    </tr>
                                    `
                                    adsTable.appendChild(thRow);

                                    for (let i in ads) {
                                        let adsTr = document.createElement("tr");
                                        adsTr.className = "table-secondary";
                                        let adsTd = document.createElement("td");
                                        adsTd.innerText = ads[i].name;
                                        let adTd = document.createElement("td");
                                        let adDelete = document.createElement("button");
                                        adDelete.classList.add("btn", "btn-outline-danger");
                                        adDelete.textContent = "Kill";
                                        adTd.appendChild(adDelete);

                                        function deleteAd() {
                                            remove(ref(database, "ads/" + i))
                                            console.log("Ad removed");
                                        }

                                        adDelete.parentNode.addEventListener("click", deleteAd);

                                        adsTr.appendChild(adsTd);
                                        adsTr.appendChild(adTd);
                                        adsTable.appendChild(adsTr);
                                    }
                                    })
                
                    }
            })
            .catch((error) => {
                console.log(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });


    } 
    else {
        
        createRegisterLoginForm();
        document.getElementById('user_register').addEventListener('click', registerNewUser);
        document.getElementById('user_login').addEventListener('click', loginUser);
        //cia turi issiremovint ir susikurt user register forma
        
    }
});

//user sign-out
const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert('Sign-out successful!')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
}