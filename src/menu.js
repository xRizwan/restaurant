const menu = () => {
    // cache DOM
    let body = document.querySelector("body")
    let content = document.querySelector("#content");
    let oldMain = document.querySelector("#mainContent")
    if (oldMain){
        content.removeChild(oldMain);
    }

    // creating Elements and giving classes and IDs
        // divs
        let mainContent = document.createElement("div");
        let menuLeft = document.createElement("div");
        let menuRight = document.createElement("div");
        mainContent.id = "mainContent";
        mainContent.style.display = "block";
        menuLeft.id = "menuLeft";
        menuRight.id = "menuRight";
        
        // section
        let section = document.createElement("section");
        section.id = "cafeMenu";

        // heading
        let h1 = document.createElement("h1");
        h1.textContent = "Menu";

        // unordered lists
        let leftList = document.createElement("ul");
        let rightList = document.createElement("ul");

        // list items
        let listItem0L = document.createElement("li");
        let listItem1L = document.createElement("li");
        let listItem2L = document.createElement("li");
        let listItem3L = document.createElement("li");
        let listItem4L = document.createElement("li");
        let listItem0R = document.createElement("li");
        let listItem1R = document.createElement("li");
        let listItem2R = document.createElement("li");
        let listItem3R = document.createElement("li");
        let listItem4R = document.createElement("li");
        listItem0L.classList.add("item"); listItem0L.id = "Cappuccino";
        listItem1L.classList.add("item"); listItem1L.id = "Espresso";
        listItem2L.classList.add("item"); listItem2L.id = "Arabica";
        listItem3L.classList.add("item"); listItem3L.id = "Robusta";
        listItem4L.classList.add("item"); listItem4L.id = "Americano";
        listItem0R.classList.add("item"); listItem0R.id = "Doppio";
        listItem1R.classList.add("item"); listItem1R.id = "Latte";
        listItem2R.classList.add("item"); listItem2R.id = "Macchiato";
        listItem3R.classList.add("item"); listItem3R.id = "Cortado";
        listItem4R.classList.add("item"); listItem4R.id = "RedEye";


        // images for list
        let img0 = document.createElement("img"); img0.src = 'images/Cappuccino.png';
        let img1 = document.createElement("img"); img1.src = 'images/Espresso.png';
        let img2 = document.createElement("img"); img2.src = 'images/Arabica.png';
        let img3 = document.createElement("img"); img3.src = 'images/Americano.png';
        let img4 = document.createElement("img"); img4.src = 'images/Doppio.png';
        let img5 = document.createElement("img"); img5.src = 'images/Latte.png';
        let img6 = document.createElement("img"); img6.src = 'images/Macchiato.png';
        let img7 = document.createElement("img"); img7.src = 'images/Cortado.png';

        img0.classList.add("item-img", "Cappuccino");
        img1.classList.add("item-img", "Espresso");
        img2.classList.add("item-img", "Arabica");
        img3.classList.add("item-img", "Americano");
        img4.classList.add("item-img", "Doppio");
        img5.classList.add("item-img", "Latte");
        img6.classList.add("item-img", "Macchiato");
        img7.classList.add("item-img", "Cortado");

        // footer
        let footer = document.createElement("footer");
        footer.textContent = "THIS IS A PROGRAMMING ASSIGNMENT AND NOT A REAL RESTAURANT";
        footer.classList.add("disclaimer");

        // adding text content for lists
        listItem0L.textContent = "Cappuccino";
        listItem1L.textContent = "Espresso";
        listItem2L.textContent = "Arabica";
        listItem3L.textContent = "Robusta";
        listItem4L.textContent = "Americano";
        listItem0R.textContent = "Doppio";
        listItem1R.textContent = "Latte";
        listItem2R.textContent = "Macchiato";
        listItem3R.textContent = "Cortado";
        listItem4R.textContent = "RedEye";

        // appending to lists
            // appending to left list
            leftList.appendChild(listItem0L);
            leftList.appendChild(listItem1L);
            leftList.appendChild(listItem2L);
            leftList.appendChild(listItem3L);
            leftList.appendChild(listItem4L);
            menuLeft.appendChild(leftList);

            // appending to right list
            rightList.appendChild(listItem0R);
            rightList.appendChild(listItem1R);
            rightList.appendChild(listItem2R);
            rightList.appendChild(listItem3R);
            rightList.appendChild(listItem4R);
            menuRight.appendChild(rightList);

        // appending to section

            // main
            section.appendChild(h1);
            section.appendChild(menuLeft);
            section.appendChild(menuRight);

            // appending images
            section.appendChild(img0);
            section.appendChild(img1);
            section.appendChild(img2);
            section.appendChild(img3);
            section.appendChild(img4);
            section.appendChild(img5);
            section.appendChild(img6);
            section.appendChild(img7);

            // footer 
            section.appendChild(footer);

        mainContent.appendChild(section);
        content.appendChild(mainContent);
}

export { menu }