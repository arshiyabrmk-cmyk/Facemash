// لیست افراد

let people = [
    {
        name: "Mojtaba",
        votes: 0,
        images: [
            "images/Mojtaba1.jpg",
            "images/Mojtaba2.jpg",
            "images/Mojtaba3.jpg",
            "images/Mojtaba4.jpg",
            "images/Mojtaba5.jpg"
        ]
    },

    {
        name: "Araz",
        votes: 0,
        images: [
            "images/Araz1.jpg",
            "images/Araz2.jpg",
            "images/Araz3.jpg",
            "images/Araz4.jpg",
            "images/Araz5.jpg",
            "images/Araz6.jpg",
            "images/Araz7.jpg",
            "images/Araz8.jpg"
        ]
    },

    {
        name: "Shayan",
        votes: 0,
        images: [
            "images/Shayan1.jpg",
            "images/Shayan2.jpg",
             "images/Shayan3.jpg",
            "images/Shayan4.jpg",
            "images/Shayan5.jpg"
        ]
    },

    {
        name: "Mahdi Ebrahimi",
        votes: 0,
        images: [
            "images/Mahdi Ebrahimi1.jpg",
            "images/Mahdi Ebrahimi2.jpg"
        ]
    },

    {
        name: "Sadeghi",
        votes: 0,
        images: [
            "images/Sadeghi1.jpg",
            "images/Sadeghi2.jpg",
            "images/Sadeghi3.jpg"

        ]
    },

    {
        name: "Nazari",
        votes: 0,
        images: [
            "images/Nazari1.jpg",
            "images/Nazari2.jpg"
        ]
    },

    {
        name: "Reza",
        votes: 0,
        images: [
            "images/Reza1.jpg"
        ]
    },

    {
        name: "Mr Kalami",
        votes: 0,
        images: [
            "images/Mr Kalami1.jpg",
            "images/Mr Kalami2.jpg"
        ]
    },

    {
        name: "Farmandeh",
        votes: 0,
        images: [
            "images/Farmandeh1.jpg",
            "images/Farmandeh2.jpg",
            "images/Farmandeh3.jpg"
        ]
    },
    {
        name: "Ehsani",
        votes: 0,
        images: [
            "images/Ehsani1.jpg"
          ]
      
        
    }
];

let leftIndex;
let rightIndex;

let leftImage = document.getElementById("person1");
let rightImage = document.getElementById("person2");

// انتخاب دو نفر جدید
function newBattle() {

    leftIndex = Math.floor(Math.random() * people.length);

    rightIndex = Math.floor(Math.random() * people.length);

    while (leftIndex == rightIndex) {

        rightIndex = Math.floor(Math.random() * people.length);

    }

    // انتخاب عکس تصادفی نفر سمت چپ
    let leftRandomImage =
        Math.floor(Math.random() * people[leftIndex].images.length);

    // انتخاب عکس تصادفی نفر سمت راست
    let rightRandomImage =
        Math.floor(Math.random() * people[rightIndex].images.length);

    leftImage.src = people[leftIndex].images[leftRandomImage];

    rightImage.src = people[rightIndex].images[rightRandomImage];

}

// کلیک روی عکس سمت چپ
leftImage.onclick = function () {

    people[leftIndex].votes++;

    updateRanking();

    newBattle();

}
// کلیک روی عکس سمت راست
rightImage.onclick = function () {

    people[rightIndex].votes++;

    updateRanking();

    newBattle();

}

// آپدیت جدول
function updateRanking() {

    people.sort(function (a, b) {

        return b.votes - a.votes;

    });

    let rows = document.querySelectorAll("#rankingTable tbody tr");

    for (let i = 0; i < people.length; i++) {

        rows[i].cells[0].innerHTML = i + 1;

        rows[i].cells[1].innerHTML = people[i].name;

        rows[i].cells[2].innerHTML = people[i].votes;

    }

}

// شروع بازی
newBattle();

updateRanking();