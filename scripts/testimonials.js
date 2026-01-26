// FOR LATER, IGNORE FOR NOW
const testimonialList = [
    {
        "rating": 4,
        "name": "Bobbi",
        "review": "A true gem of a friend!"
    },
    {
        "rating": 4,
        "name": "Bob",
        "review": "This Rocks!"
    },
    {
        "rating": 2,
        "name": "Goob",
        "review": "Very lazy, doesn't move for days."
    },
    {
        "rating": 5,
        "name": "Bobbert",
        "review": "Mine's not just a rock. it's family!"
    },
    {
        "rating": 5,
        "name": "Bobsi",
        "review": "My depression? Cured. Will to live? Restored!"
    },
    {
        "rating": 5,
        "name": "Bobberta",
        "review": "Walking my pet rock every day has been a great way to get some exercise!"
    }
]

let testimonialsBox = document.getElementById("testimonials-box")

for (let review of testimonialList) {

    drawNewTestimonials(review.name, review.review, review.rating);

}

let tForm = document.getElementById("t-form");
function addTestimonials(event) {
    event.preventDefault();

    let name = document.getElementById("t-name").value;
    let message = document.getElementById("t-message").value;
    let rating = document.querySelector('input[name = rating]:checked').value;

    drawNewTestimonials(name, message, rating);


}
tForm.addEventListener("submit", addTestimonials);

function drawNewTestimonials(name, message, rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += `<img class="star-img" src="assets/star_yellow.svg">`
        } else {
            stars += `<img class="star-img" src="assets/star_black.svg">`
        }
    }

    let testimonialToAdd = `
    <div class="testimonial">
        <div class="rating-row">
            <div class="t-stars">
                ${stars}
            </div>
              <p class="t-name">~${name}</p>
        </div>
            <p class="t-messege">
              ${message}
            </p>
    </div>
    `
    testimonialsBox.innerHTML += testimonialToAdd;
}