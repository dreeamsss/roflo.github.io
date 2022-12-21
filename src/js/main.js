document.addEventListener("DOMContentLoaded", function() {
    const promise = fetch("../resources/data/data.json")
    .then(response => {
        return response.json();
    });

    const mainBtn = document.querySelector(".main__btn");
    mainBtn.addEventListener("click", function() {
        promise.then(data => {
            const randomInt = random(0, data.length - 1);
            const randomMessage = (data[randomInt].message).toUpperCase();
            const messageElement = document.querySelector(".main__message");
    
            messageElement.innerHTML = `ТЫ <span class="text-danger">${randomMessage}</span>`;
        });
    });


    const random = (min, max) => {
        const random = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(random);
    }
});
