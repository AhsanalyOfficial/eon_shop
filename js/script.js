// Serach 

function openNav() {
    document.getElementById("search-container").style.height = "100%";
}

function closeNav() {
    document.getElementById("search-container").style.height = "0%";
}

// Sticky

// window.addEventListener("scroll", function () {
//     var header = this.document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0)
// })

// change image

function changeColor() {
    let displayImage = document.getElementById("sunny")
    if (displayImage.src.match("img/icons8-sun-50.png")) {
        displayImage.src = "img/icons8-moon-66.png"
    } else {
        displayImage.src = "img/icons8-sun-50.png"
    }
}

// // Dark Mode

// function changeColor() {
//     var element = document.getElementById("header");
//     element.classList.toggle("mystyle");
//     var element = document.getElementById("gallery");
//     element.classList.toggle("mygallery")
// }

// Search Filter

const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const data = [
    'Apple',
    'Smart Watch',
    'Smart Watch Series 1',
    'Smart Watch Series 2',
    'Smart Watch Series 3',
    'Smart Watch Series 4',
    'Smart Watch Series 5',
    'Banana',
    'Cherry',
    'Durian',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Imbe',
    'Jackfruit',
    'Kiwi',
    'Lemon',
    'Mango',
    'Nectarine',
    'Orange',
    'Pineapple',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Ugli fruit',
    'Vanilla bean',
    'Watermelon',
    'Xigua (Chinese watermelon)',
    'Yellow passionfruit',
    'Zucchini'
];

function showResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
    searchResults.style.display = 'block';
}

function hideResults() {
    searchResults.style.display = 'none';
}

searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase();
    const results = data.filter(item => item.toLowerCase().includes(value));
    if (results.length > 0) {
        showResults(results);
    } else {
        hideResults();
    }
});

searchResults.addEventListener('click', (event) => {
    const li = event.target.closest('li');
    if (li) {
        searchInput.value = li.textContent;
        hideResults();
    }
});

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target)) {
        hideResults();
    }
});

// // // // // // // // // // // // // // // // // // // // // // // // // // 

// document.getElementById("sunny").addEventListener("click", function () {
//     document.getElementById("header").style.background = "#333333";
// });

document.getElementById("sunny").addEventListener("click", function () {
    document.getElementById("header").classList.toggle("header-color");
})
var a = document.getElementById("navbar1").children;
console.log(a);

// Practice