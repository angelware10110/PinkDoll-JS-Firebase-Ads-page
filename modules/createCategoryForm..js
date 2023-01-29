const createCategoryForm = () => {

    //info for admin
    const infoForAdmin = document.createElement('div');
    infoForAdmin.innerText = "You are an Admin";
    infoForAdmin.classList.add("my-3", "navbar", "navbar-dark", "bg-dark");

    const place = document.getElementById('root');
    const formCategory = document.createElement('form');
    const categoryInput = document.createElement('input');
    categoryInput.classList.add("form-control", "my-3");
    categoryInput.placeholder = "Enter new category"
    categoryInput.type = "text";
    categoryInput.id = "create_category"
    const categoryBtn = document.createElement('button');
    categoryBtn.type = "submit";
    categoryBtn.id = "category";
    categoryBtn.innerText = "Apply";
    categoryBtn.classList.add("btn", "btn-secondary");

    place.appendChild(infoForAdmin);
    formCategory.appendChild(categoryInput);
    formCategory.appendChild(categoryBtn);
    place.appendChild(formCategory);

}

export { createCategoryForm }