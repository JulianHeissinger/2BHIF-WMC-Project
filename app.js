// Luka (Jets)

// Wird ausgeführt wenn Sichtbarkeit der Objekte verändert wird z.Bsp. durch scrollen
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }
        else {
            entry.target.classList.remove('show1');
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el)); //Oberserviert jedes Element

// Julian (Motorcycles)

function AddHover(element){
    const e = document.querySelector(element);
    e.classList.remove("unhovered");
    e.classList.add("hovered");
}

function RemHover(element) {
    const e = document.querySelector(element);
    e.classList.add("unhovered");
    e.classList.remove("hovered");
}
