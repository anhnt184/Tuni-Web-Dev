
document.addEventListener('userDataReady', e =>{
    s = e.detail.jsonText;
    var obj = JSON.parse(s);
    obj.forEach(element => {
        const container = document.getElementById('contacts');
        const temp = document.getElementById('user-card-template');
        var clon = temp.content.cloneNode(true);
        str = '';
        clon.querySelector('img').src = element.avatar;
        clon.querySelector('img').alt = element.firstName + " " + element.lastName;
        clon.querySelector("h1").innerText = element.firstName + " " + element.lastName;
        clon.querySelector(".title").innerText = element.email;
        clon.querySelector(".phone").innerHTML = 'Tel. ' + '<span>' + element.phoneNumber + '</span>';
        clon.querySelector(".address").innerHTML = str.concat("<p>",element.address.streetAddress,"</p>","<p>",element.address.zipCode," ", element.address.city,"</p>", "<p>",element.address.country,"</p>");
        // clon.querySelector(".address").innerHTML = '<p>' + element.address.streetAddress + '</p>' + '<p>' + element.address.zipCode + " " + element.address.city  + '</p>' +'<p>' + element.address.country + '</p>';
        clon.querySelector(".homepage").innerHTML = '<a href= "' + element.homepage + '">' + element.homepage + '</a>';
       container.appendChild(clon);
        
    });
    
})
fetchUserData();