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



// Paul (Cars)

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
