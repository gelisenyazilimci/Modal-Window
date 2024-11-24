"use strict";

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

const hidden = document.querySelector(".hidden");

const btnCloseModel = document.querySelector(".close-modal");

const btnShowModel = document.querySelectorAll(".show-modal");

btnShowModel.forEach(btn => {
    btn.addEventListener("click", async function () {
        console.log("Button clicked");
        await simulateAsyncOperation();
        console.log("Async operation complete");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        console.log("Opened window");
    });
});

async function simulateAsyncOperation () {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Simulated API call completed");
            resolve();
        }, 100); // 0.1 second
    });
}

const  closeWindow = async function () {
    console.log("Button clicked")
    await simulateAsyncOperation();
    console.log("Async operation complete");
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log("closed window");
}

btnCloseModel.addEventListener('click', closeWindow )
overlay.addEventListener("click", closeWindow)


document.addEventListener("keypress", async function (e) {
    return e.key === "q" && !modal.classList.contains('hidden') ? closeWindow() : "ERROR";
});

