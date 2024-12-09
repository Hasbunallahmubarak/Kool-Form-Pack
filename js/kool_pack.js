const modal = document.getElementById("myModal");
const content = document.getElementById("myModal-container");
const menubar = document.getElementById("menu-bar");
const closeBtn = document.getElementById("close");
const formNotify = document.getElementById("notifyBtn");
let overlay = document.getElementById("overlay");
const sidebar =  document.getElementById("side-bar");

//Top menu bar side-bar function
menubar.addEventListener("click", sideBarFunction);
function sideBarFunction() {
    sidebar.style.right = "0px";
    overlay.style.display = "block";
}

//Close side-bar functions
closeBtn.addEventListener("click", closeSideBar);
overlay.addEventListener("click",  closeSideBar);
overlay.addEventListener("click",  closeTheModal);
function closeSideBar() {
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-500px";
        overlay.style.display = "none";
    };
    if (modal.style.display === "block") {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }  
}

const notifyBtn = document.querySelector("#notify");
const closeModal = document.getElementById("closeModal");

notifyBtn.addEventListener("click", () => {
    if (modal.style.display === "none") {
       modal.style.display = "block";
       modal.className = "addAnim";
       overlay.style.display = "block";
    } else {
        closeTheModal();
    }
});

closeModal.addEventListener("click", closeTheModal);
formNotify.addEventListener("click", closeTheModal);

function closeTheModal() {
    modal.className = "removeAnim";
    modal.style.display = "none";
    overlay.style.display = "none";
}

//Count-down function
const countDownContainer = document.querySelector("#count-down");
let countContainer = document.createElement("ul");
let interval = setInterval(() => {
    let days, hours, minutes, seconds;
    const currentDate = new Date();
/*initially, when this website was buil, it countdown was until Dec 8; which was my birthday. Today, 9th of December after my birthday, I updated it Mar 2; start day of Ramadan*/ 
    let newDate = new Date("Mar 02 2025 11:59:59");
    let difference =  newDate - currentDate;
    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((difference % (1000 * 60 )) / (1000));
    const countDownObj = {
        first: days,
        second: hours,
        third: minutes, 
        fourth: seconds
    };
    viewInDom(countDownObj);
}, 1000);
function viewInDom(obj) {
    const {first, second, third, fourth} = obj;
    countContainer.innerHTML = `
        <li class = "counter-item">
            <h3>${first}</h3>
            <p> Days </p>
        </li>
        <li class = "counter-item">
            <h3>${second}</h3>
            <p>Hours</p>
        </li>
        <li class = "counter-item">
            <h3>${third}</h3>
            <p>Minutes</p>
        </li>
        <li class = "counter-item">
            <h3>${fourth}</h3>
            <p> Seconds </p>
        </li>
    `;
}
countDownContainer.appendChild(countContainer);