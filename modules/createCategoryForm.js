const createCategoryForm = () => {

    //info for admin
    const infoForAdmin = document.createElement('div');
    infoForAdmin.innerText = "You are an Admin";
    infoForAdmin.classList.add("my-3", "navbar", "navbar-light");

    const place = document.getElementById('root');
    const formCategory = document.createElement('form');
    const categoryInput = document.createElement('input');
    const categoryBtn = document.createElement('button');

    categoryInput.classList.add("form-control", "my-3");
    categoryInput.placeholder = "Enter new category"
    categoryInput.type = "text";
    categoryInput.id = "create_category"

    categoryBtn.classList.add("btn", "btn-secondary");
    categoryBtn.type = "submit";
    categoryBtn.id = "category";
    categoryBtn.innerText = "Apply";

    place.appendChild(infoForAdmin);
    formCategory.appendChild(categoryInput);
    formCategory.appendChild(categoryBtn);
    place.appendChild(formCategory);

    let categoriesTable = document.createElement("table");
    categoriesTable.id = "table";
    categoriesTable.classList.add("table", "my-5");
    place.appendChild(categoriesTable);
}

export { createCategoryForm }