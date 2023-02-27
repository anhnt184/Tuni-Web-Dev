// var firstUL = document.getElementsByTagName('UL')[0];
// // console.log(firstUL); //assuming the whole list is the first UL in the document
let elements = document.querySelectorAll("li");

elements.forEach(list_element => {
    if (list_element.getElementsByTagName("li").length > 0) {
        console.log(list_element.firstChild.textContent);
        list_element.firstChild.textContent = list_element.firstChild.textContent + "(" + list_element.getElementsByTagName("li").length + ")";
    }
 });
    
