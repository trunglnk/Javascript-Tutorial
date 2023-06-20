const menus = [
    {
        "name": 'Get data',
        "url": "#",
        "child_menu": ['Occurrences', 'GBIF API', 'Species', 'Datasets', 'Occurrence snapshots', 'Hosted portals', 'Trends']
    },
    {
        "name": 'How to',
        "url": "#",
        "child_menu": ['Quick-start guide', 'Dataset classes', 'Data hosting', 'Standards', 'Become a publisher', 'Data quality', 'Data papers']
    },
    {
        "name": 'Tools',
        "url": "#",
        "child_menu": ['IPT', 'Data validator', 'Scientific Collections', 'Suggest a dataset', 'New Data Model']
    },
    {
        "name": 'Community',
        "url": "#",
        "child_menu": ['Participant network', 'Nodes', 'Publishers', 'Network Contact', 'Community Forum']
    },
    {
        "name": 'About',
        "url": "#",
        "child_menu": ['News', 'Newsletters and lists', 'Events', 'Awards', 'Science Review', 'Data Use']
    }
];

let ul = document.querySelector(".menu")
for (let i = 0; i < menus.length; i++){
    let li = document.createElement("li")
    li.setAttribute("class", "dropdown")
    let text = `<a href="#" class="dropbtn">${menus[i].name}</a>`
    let drop = document.createElement("div")
    drop.setAttribute("class", "dropdown-content")
    let child = menus[i].child_menu
    li.innerHTML = text
    li.appendChild(drop)
    ul.appendChild(li)
    let content = ''
    for (let j = 0; j < child.length; j++){
      content += `
          <a href="#">${child[j]}</a>
        `
        drop.innerHTML = content
    }
}

var dropdowns = document.getElementsByClassName("dropdown");

for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function(event) {
        event.stopPropagation();
        var isActive = this.classList.contains("active");

        closeAllDropdowns();

        if (!isActive) {
            this.classList.add("active");
        }
    });
}

function closeAllDropdowns() {
    for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains("active")) {
            dropdowns[i].classList.remove("active");
        }
    }
}

document.addEventListener("click", function(event) {
    if (!event.target.classList.contains("dropbtn")) {
        closeAllDropdowns();
    }
});

//Cuộn chuột đổi màu nav
window.addEventListener('scroll', function() {
    document.querySelector('.navbar').style.backgroundColor = "#71b171";
});