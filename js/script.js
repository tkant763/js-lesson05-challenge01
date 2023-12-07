// define variables
var button = document.querySelector(".show-cat");
// console.log(button);
var cat = document.querySelector(".cat");
// console.log(cat);

// show cat on click
button.addEventListener("click", function() {
    // console.log("It's working!");
    cat.classList.add("show");
});