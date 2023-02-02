const createProductForm = () => {

    //info for the user

    const infoForUser = document.createElement('div');
    infoForUser.innerText = "Place an ad, Angel";
    infoForUser.classList.add("my-3", "navbar", "navbar-light");

    const place = document.getElementById('root');
    const formAd = document.createElement('form');
    const adInput = document.createElement('input');
    const adBtn = document.createElement('button');

    adInput.classList.add("form-control", "my-3");
    adInput.placeholder = "Your ad"
    adInput.type = "text";
    adInput.id = "create_ad"

    adBtn.classList.add("btn", "btn-secondary");
    adBtn.type = "submit";
    adBtn.id = "ad";
    adBtn.innerText = "Add";

    place.appendChild(infoForUser);
    formAd.appendChild(adInput);
    formAd.appendChild(adBtn);
    place.appendChild(formAd);

    let adsTable = document.createElement("table");
    adsTable.id = "table";
    adsTable.classList.add("table", "my-5");
    place.appendChild(adsTable);


}

export { createProductForm }


