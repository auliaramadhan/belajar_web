const deleteButton = document.querySelectorAll('.deleteUser')
document.getElementById('d')

deleteButton.forEach((deleteb) => {
    deleteb.addEventListener('click', deleteUser);
});
const url = 'http://localhost:3000/users';

function deleteUser() {
    let confirmation = confirm('are you sure')
   const id = this.dataset.id;
   
   if (confirmation) {
       window.location.replace(`${url}/delete/${id}`)
       // var request = new XMLHttpRequest();
        // request.open('GET', `${url}/delete/${id}` , true);
        // console.log(`${url}/delete/${id}`);
    }
}
