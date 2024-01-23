const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
           entry.target.classList.remove('show'); 
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//Opening, closing modals

const openPopupButtons = document.querySelectorAll('[data-popup-target]')
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => { //Listens for button click, calls openPopup
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button => { //Listens for button click, calls closePopup
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


//Storing user input to username variable, input validation, opening popupWelcome
let username;
let checkBox = document.getElementById("checkbox");
let welcomeHeading = document.getElementById("headingWelcome");


document.getElementById("submit").onclick = function(){
    if(checkBox.checked == true){
        if(document.getElementById('name').value == ""){
            alert("Enter your name!");
        }
        else{
            username = document.getElementById("name").value;
            closePopup(popup)
            welcomeHeading.innerText  = "Welcome, " + username;
            openPopup(popupWelcome)
        }
    }
}

