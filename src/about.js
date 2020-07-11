const about = () => {
    // cache DOM
    let body = document.querySelector("body")
    let content = document.querySelector("#content");
    let oldMain = document.querySelector("#mainContent")
    if (oldMain){
        content.removeChild(oldMain);
    }

    // creating Elements
    let mainBody = document.createElement("div");
    let section0 = document.createElement("section");
    let section1 = document.createElement("section");
    let section2 = document.createElement("section");
    let imgsec0 = document.createElement("img");
    let imgsec1 = document.createElement("img");
    let imgsec2 = document.createElement("img");
    let psec0 = document.createElement("p");
    let psec1 = document.createElement("p");
    let psec2 = document.createElement("p");
    let hsec0 = document.createElement("h1");
    let hsec1 = document.createElement("h1");
    let hsec2 = document.createElement("h1");

    // adding content to the elements

    // headings
    hsec0.textContent = "BestCoffee";
    hsec1.textContent = "Out Staff";
    hsec2.textContent = "Restaurant Environment";

    // images
    imgsec0.src = "images/beans.png";
    imgsec1.src = "images/staff1.png";
    imgsec2.src = "images/environ1.png";
    imgsec0.classList.add("card-img");
    imgsec1.classList.add("card-img");
    imgsec2.classList.add("card-img");

    // paragraphs
    psec0.textContent = `Our Coffee is made from the finest coffee beans hand-picked by experts, brewed with
    extreme care.`;
    psec1.textContent = `Out staff is filled with nice and polite people who enjoy coffee as well
    and will love to get to know you.Come and let's meet up.`;
    psec2.textContent = `We provide you with an Environment in which you can come and forget About
    all your worries, listening to soothing music while drinking our coffee is
    bound to make you drift into the land of fantasy.`;

    // sectionIDs
    section0.setAttribute("id", "coffeeHead");
    section1.setAttribute("id", "coffeeHead");
    section2.setAttribute("id", "coffeeHead");

    // appending to sections
        // sec0
        section0.appendChild(hsec0);
        section0.appendChild(imgsec0);
        section0.appendChild(psec0);

        // sec1
        section1.appendChild(hsec1);
        section1.appendChild(imgsec1);
        section1.appendChild(psec1);

        // sec2
        section2.appendChild(hsec2);
        section2.appendChild(imgsec2);
        section2.appendChild(psec2);

    // appending to the contentDiv
    mainBody.appendChild(section0);
    mainBody.appendChild(section1);
    mainBody.appendChild(section2);
    mainBody.setAttribute("id", "mainContent");

    // appending to the DOM
    content.appendChild(mainBody);
}

export {about}