const newSubmit = document.getElementById('form');
const clickButton = document.getElementById('submit');

clickButton.addEventListener("click", (eve) => {
    eve.preventDefault();
    const formData = new FormData(newSubmit);
    const name = formData.get('name');
    const email = formData.get('email');
    const homepage = formData.get('homepage');

    const container = document.getElementById('contacts');
    const temp = document.getElementById('contact-template');
    var clon = temp.content.cloneNode(true);
    clon.querySelector("h2").innerText = name;
    clon.querySelector(".email").innerText = email;
    clon.querySelector(".homepage").innerHTML = '<a href= "' + homepage + '">' + homepage + '</a>';
     
   
    container.appendChild(clon);

    document.getElementById("form").reset();
});
