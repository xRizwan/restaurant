function toggleImages(items){
    items.forEach(item => {
        item.addEventListener("mouseover", (e) => {
            const img = document.querySelector(`.${item.id}`)
            if (img){img.style.display = "block"};
            item.addEventListener("mouseout", () => {
                img.style.display = "none";
            })
        })
    })
}

export { toggleImages };