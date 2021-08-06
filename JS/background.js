const images=["wood-3039518_1920.jpg", "reservoir-959230_1920.jpg", "non-transferability-988918_1920.jpg", "nature-3095900_1920.jpg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `IMG/${chosenImage}`;

document.body.prepend(bgImage);