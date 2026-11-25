
const repository =
    "https://github.com/yariricci2-png/WhatIsInMyPC";

const version = "v1.4.0";

const installer =
    "WhatIsInMyPC_1.4.0_x64-setup.exe";

const downloadURL =
    `${repository}/releases/download/${version}/${installer}`;

const releaseURL =
    `${repository}/releases/tag/${version}`;

// DOWNLOAD BUTTONS

document.querySelectorAll("[data-download]").forEach(button => {
    button.href = downloadURL;
});

// GITHUB RELEASE LINKS

document.querySelectorAll("[data-release]").forEach(link => {
    link.href = releaseURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
});

// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// KEEP ONLY ONE FAQ OPEN

const questions = document.querySelectorAll("details");

questions.forEach(question => {

    question.addEventListener("toggle", () => {

        if (question.open) {

            questions.forEach(otherQuestion => {

                if (otherQuestion !== question) {
                    otherQuestion.open = false;
                }

            });

        }

    });

});
