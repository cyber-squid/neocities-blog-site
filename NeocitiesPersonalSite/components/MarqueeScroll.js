// by doing this we essentially create a copy of our relevant section and place it right under the original.
// this makes it so when the scroll animation for the div that this is used for happens, it appears to seamlessly loop back to the beginning.
// the copy appears right under the original within the overflow window, and using css, once the original is out of sight it can reappear under the copy.

[...document.querySelectorAll(".blinkies-inner-box")] // get everything we want to marquee
    .map((div) => div.children[0]) // turn all of them into their first child that actually holds all the images
    .forEach((innerDiv) => { // run a function on all of these...
        let follower = innerDiv.cloneNode(true); // that copies the image container
        follower.classList.add("follower"); // makes the new one a follower
        innerDiv.parentElement.appendChild(follower); // and puts the follower right after the original
        follower.classList.add("play"); // and makes them both play
        innerDiv.classList.add("play");
    })