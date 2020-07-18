/* load screen button ( hide - show page) */

function loadSite() {
    document.querySelector('.showscreen').style.display = 'block';
    document.querySelector('.loadpage').style.display = 'none';
}

/* parallax text - reaserch from https://www.youtube.com/watch?v=Dxm6EwvQIl8&t=797s ( since the video was done in 2018 the code didn't work
so i reaserched and asked on stack overflow which got me to this final script which in essence takes the y axes coordinates of the screen and
 as you scroll down it increments the translate3d property used in css for the line elements as the full text displayed on the screen is split in to small segments
 and thos on the right and left are targeted for the animation to happen using this method.*/

window.addEventListener('scroll', function textSlide() {

    const target = document.querySelectorAll('.text-parallax');

    let index = 0,
        length = target.length;
    for (index; index < length; index++) {
        let pos = window.pageYOffset * target[index].dataset.rate;

        if (target[index].dataset.direction === 'vertical') {
            target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
        }
    }
    console.log(textSlide);
});

/* load content on scroll - for About section  
reference - https://www.youtube.com/watch?v=C_JKlr4WKKs&t=691s*/
function loadElement() {
    let showElement = document.querySelector('.load-element');
    let curentPosition = showElement.getBoundingClientRect().top;
    let deviceResolution = window.innerHeight;

    if (curentPosition < deviceResolution) {
        showElement.classList.add('loadtext');
    }
}
window.addEventListener('scroll', loadElement);

/* show read more section / hide read more button once section slides in */
function loadSection() {
    document.querySelector('.loadsection').classList.add('loadreadmore');
    document.querySelector('.btnreadmore').style.display = 'none';
}

console.log(loadSection);

/* load contacts page on scroll */

function loadContact() {
    let showContactPage = document.querySelector('.load-contactpage')
    let curentViewposition = showContactPage.getBoundingClientRect().top;
    let deviceResolution = window.innerHeight;

    if (curentViewposition < deviceResolution) {
        showContactPage.classList.add('loadpage');
    }
}
window.addEventListener('scroll', loadContact);

console.log(loadElement);
console.log(loadContact);

/* photo quote generator
code source - random quote generator from class */

function genQuote() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum];
}

let quotes = ["Blank", "\"Either I will find a way, or I will make one.\" - Philip Sidney", "\" The thing about programing is experience doesnt't mean you don't create bugs, you just learn to recognise them fatser.\" - Alex A", "\"The things you fear the most turn out to be the simplest, You can do it!\"- Alex A", ];

console.log(genQuote);

/* form validations
the code for this function i wrote while following a twitch streamer while he was doing it 
References - DevEd on twitch
 */

function checkForm() {
    let name = document.getElementById('input_name');
    let gmail = document.getElementById('input_gmail');
    let msg = document.getElementById('error-message');

    console.log("click my button");

    if (name.value == "") {
        msg.style.display === 'block';
        msg.innerHTML = "You must enter a Name";
        name.focus();
        return false;
    } else {
        msg.innerHTML = ""
        msg.style.display === 'none';
    }

    if (gmail.value == "") {
        msg.style.display === 'block';
        msg.innerHTML = "You must enter a Email";
        gmail.focus();
        return false;
    } else {
        msg.innerHTML = "";
        msg.style.display === 'none';
    }

    if (!gmail.value.includes("@")) {
        msg.style.display === 'block';
        msg.innerHTML = "Please enter a valid Email";
        gmail.focus();
        return false;
    } else {
        msg.innerHTML = "";
        msg.style.display === 'none';
    }

    if (msg.style.display === 'block') {
        msg.style.display = 'none';
    } else {
        msg.style.display = 'block';
        return false;
    }
}
console.log(checkForm);