const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup){
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup){
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}


let username;
let checkBox = document.getElementById("checkbox");
let welcomeHeading = document.getElementById("headingWelcome");


document.getElementById("submit").onclick = function(){
    if(checkBox.checked == true){
        username = document.getElementById("name").value;

        if(document.getElementById('name').value == ""){
            alert("Enter your name!");
        }
        else{
            closePopup(popup)
            welcomeHeading.innerText  = "Welcome, " + username;
            openPopup(popupWelcome)
        }
    }
}

