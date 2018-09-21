const link = document.querySelectorAll('.deleteUser');
link.forEach(item => {
   item.addEventListener('click',deleteUser)
});

function deleteUser() {
   console.log('object');
   
   var confirm = confirm('Are u Sure');
   const id = this.dataset.id;

   if (confirm) {
      var request = new XMLHttpRequest();
      request.open('DELETE', '/users/delete/', true);
      request.send(data);
   }
}