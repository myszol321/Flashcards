// function myFunction() {
//     const cards = document.getElementsByClassName("card");
//     for(var i=0;i<cards.length;i++){
//         cards[i].click();
//
//         document.getElementsByClassName("test").innerHTML = "YOU CLICKED ME!";
//     }
// }
window.onload = () => {
    const items = Array.from(document.getElementsByClassName("card"));

// add click event listener for each collection item
    items.forEach((button, index) => {
        button.addEventListener("click", () => {
            if(button.style.transform == 'rotateY(180deg)') {
                button.style.transform = 'rotateY(0deg)';
            }
            else {
                button.style.transform = 'rotateY(180deg)';
            }
        });
    });
}