const testimonials = [
    {
        name: "Charlese",
        photoUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Testimonial one example",
    },
    {
        name: "Michelle",
        photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=461&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Testimonial two example",
    },
    {
        name: "Jacob",
        photoUrl: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "Testimonial three example",
    },
];



const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;


updateTestimonial()

function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) {
        idx = 0;
    }
    setTimeout(() => {
        updateTestimonial()
    }, 2000);
}