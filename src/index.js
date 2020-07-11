import { about } from "./about"
import { contact } from "./contact"
import { menu } from "./menu"
import { toggleImages } from "./toggleImages";

window.onload = about();

// getting alltabs and the current selected tab
let allTabs = document.querySelectorAll('.tab');
let current = document.querySelector(".current");

// for each tab add an onclick event listener that changes the previous current to the new one
allTabs.forEach(tab => {
    // adding event listener for each tab
    tab.addEventListener("click", (e) => {
        
        // removing the current class from the previously selected tab
        allTabs.forEach(tab => {
            if (current === tab){
                tab.classList.remove("current");
            }
        })

        // adding current class to the newly selected tab
        e.path[0].classList.add("current");
        
        // updating current to the new current
        current = document.querySelector(".current");
        if (current.id === "about"){
            about();
        }
        else if (current.id === "menu"){
            menu();
            let images = document.querySelectorAll(".item");
            toggleImages(images);
        }
        else {
            contact();
        }
    })
})