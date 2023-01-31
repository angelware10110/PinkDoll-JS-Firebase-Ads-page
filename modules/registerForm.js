const createRegisterLoginForm = () => {

    document.getElementById('root').innerHTML = `
    <h1>Create a new category</h1>
    <form>
    <div class="mb-3">
      <label for="newCategory" class="form-label">Category</label>
      <input type="text" class="form-control" id="create_category" aria-describedby="emailHelp">
    </div>
    <button type="submit" id="category" value="category" name="category" value="category" class="btn">Apply</button>
  </form>
</div>
</div> -->
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





