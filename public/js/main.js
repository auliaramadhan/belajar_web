const deleteButton = document.querySelectorAll('.deleteUser')
document.getElementById('d')

deleteButton.forEach((deleteb) => {
    deleteb.addEventListener('click', deleteUser);
});

function deleteUser() {
    let confirmation = confirm('are you sure')

    if (confirmation) {
        var request = new XMLHttpRequest();
        request.open('DELETE', '/users/delete/'+ this.data('id'), true);
        window.location.replace('/')
    }
}
