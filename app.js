const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    }];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const info = document.getElementById('info');
const job = document.getElementById('job');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    showPerson()
});
const showPerson = () => {
    const item = reviews[currItem];
    img.src = item.img;
    author.textContent = item.name;
    info.textContent = item.text;
    job.textContent = item.job;
}

prevBtn.addEventListener('click', () => {
    currItem--;
    if (currItem < 0) {
        currItem = reviews.length - 1;
    }
    showPerson()
})

nextBtn.addEventListener('click', () => {
    currItem++;
    if (currItem > reviews.length - 1) {
        currItem = 0;
    }
    showPerson();
})

randomBtn.addEventListener('click', () => {
    const it = reviews[Math.floor(Math.random() * reviews.length)];
    img.src = it.img;
    author.textContent = it.name;
    info.textContent = it.text;
    job.textContent = it.job;
})