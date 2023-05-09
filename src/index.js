// write your code here
document.addEventListener("DOMContentLoaded", function() {
    const imageDiv = document.querySelector('#ramen-menu');
    const ramenImg = document.querySelector(".detail-image");
    const ramenName = document.querySelector(".name");
    const ramenRest = document.querySelector(".restaurant");
    const ramenRating = document.querySelector("#rating-display");
    const ramenCom = document.querySelector("#comment-display");
    const inputForm = document.querySelector("#new-ramen");



    fetch("http://localhost:3000/ramens")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(element => {
                const image = document.createElement("img");
                image.src = element.image
                imageDiv.appendChild(image);
                image.addEventListener("click", (event) => {
                    ramenImg.src = element.image;
                    ramenName.textContent = element.name;
                    ramenRest.textContent = element.restaurant;
                    ramenRating.textContent = element.rating;
                    ramenCom.textContent = element.comment;
                })
            })
        });

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputName = document.querySelector("#new-name");
        const inputRest = document.querySelector("#new-restaurant");
        const inputImg = document.querySelector("#new-image");
        const inputRating = document.querySelector("#new-rating");
        const inputCom = document.querySelector("#new-comment");

        const formInput = {
            name: inputName.value,
            restaurant: inputRest.value,
            image: inputImg.value,
            rating: inputRating.value,
            comment: inputCom.value,
            };

        const image = document.createElement("img");
        image.src = formInput.image;
        imageDiv.appendChild(image);

        ramenImg.src = formInput.image;
        ramenName.textContent = formInput.name;
        ramenRest.textContent = formInput.restaurant;
        ramenRating.textContent = formInput.rating;
        ramenCom.textContent = formInput.comment;

        inputForm.reset();

        })

    
})