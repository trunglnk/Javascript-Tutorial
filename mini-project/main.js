const menus = [
    {
        "name": 'Get data',
        "url": "#",
        "child_menu": [
            {
                "title": "",
                "menu_item": ['Occurrences', 'GBIF API', 'Species', 'Datasets', 'Occurrence snapshots', 'Hosted portals', 'Trends']
            }
        ]
    },
    {
        "name": 'How to',
        "url": "#",
        "child_menu": [
            {
                "title": "Share data",
                "menu_item": ['Quick-start guide', 'Dataset classes', 'Data hosting', 'Standards', 'Become a publisher', 'Data quality', 'Data papers']
            },
            {
                "title": "Use data",
                "menu_item": ['Featured data use', 'Citation guidelines', 'GBIF citations', 'Citation widget']
            }
        ]
    },
    {
        "name": 'Tools',
        "url": "#",
        "child_menu": [
            {
                "title": "Publising",
                "menu_item": ['IPT', 'Data validator', 'Scientific Collections', 'Suggest a dataset', 'New data model']
            },
            {
                "title": "Data access and use",
                "menu_item": ['Hosted portals', 'Data processing', 'Derived datasets', 'rgbif', 'pygbif', 'MAXENT', 'Tools catalogue']
            },
            {
                "title": "GBIF labs",
                "menu_item": ['Species matching', 'Name parser', 'Sequence ID', 'Relative observation trends', 'GBIF data blog']
            }
        ]
    },
    {
        "name": 'Community',
        "url": "#",
        "child_menu": [
            {
                "title": "Network",
                "menu_item": ['Participant network', 'Nodes', 'Publishers', 'Network contacts', 'Community forum', 'alliance for biodiversity knowledge']
            },
            {
                "title": "Volunteers",
                "menu_item": ['Mentors', 'Ambassadors', 'Translators', 'Citizen scientists']
            },
            {
                "title": "Activities",
                "menu_item": ['Capacity enhancement', 'Programmes & projects', 'Training and learning resources', 'Data Use Club', 'Living Atlases']
            }
        ]
    },
    {
        "name": 'About',
        "url": "#",
        "child_menu": [
            {
                "title": "Inside Gbif",
                "menu_item": ['What is GBIF?', 'Become a member', 'Governance', 'Implementation plan', 'Work Programme', 'Funders', 'Partnerships', 'Release notes', 'Contacts']
            },
            {
                "title": "News & outreach",
                "menu_item": ['News', 'Newsletters and lists', 'Events', 'Awards', 'Science Review', 'Data Use']
            }
        ]
    }
];

let ul = document.querySelector(".menu")
for(let i = 0; i < menus.length; i++){
    let liParen = document.createElement("li")
    liParen.setAttribute("class", "dropdown")
    let text = `<a href="#" class="dropbtn">${menus[i].name}</a>`
    liParen.innerHTML = text
    ul.appendChild(liParen)
    let child = menus[i].child_menu
    let drop = document.createElement("div")
    drop.setAttribute("class", "dropdown-content")

    for(let j = 0; j < child.length; j++){
        let itemDrop = document.createElement("div")
        itemDrop.setAttribute("class", "item-drop")
        let title = document.createElement("h2")
        title.innerHTML = child[j].title

        liParen.appendChild(drop)
        drop.appendChild(itemDrop)
        itemDrop.appendChild(title)

        let ulChild = document.createElement("ul")
        ulChild.setAttribute("class", "list-group")
        let menuItem = child[j].menu_item
        let item = ""
        for(let k = 0; k < menuItem.length; k++ ){
            item += `<li><a href="#">${menuItem[k]}</a></li>`
            ulChild.innerHTML = item
            itemDrop.appendChild(ulChild)
        }
    }
}

//render language
const languages = ['English', 'العربية', '简体中文', 'Français', 'Русский', 'Español', '繁體中文', '日本語', 'Português', 'Українська']
let listLanguage = document.querySelector(".card-body")
let text = ''
for (let i = 0; i < languages.length; i++){
    text += `
    <div class="form-check">
                <input class="form-check-input" type="radio" name="language" id="radio${i}" value="${languages[i]}">
                <label class="form-check-label" for="radio${i}">
                    ${languages[i]}
                </label>
            </div>
    `
    listLanguage.innerHTML = text
}

//render banner
const listBanner = ['./banner/banner1.jpg', './banner/banner2.jpg', './banner/banner3.jpg', './banner/banner4.jpg', './banner/banner5.jpg']

function changeBanner() {
    let img = document.querySelector('.banner-content img');
    let randomIndex = Math.floor(Math.random() * listBanner.length);
    let randomImage = listBanner[randomIndex];
    img.src = randomImage;
}
changeBanner()

//-----------------------------------
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
    document.querySelector('.navbar-me').style.backgroundColor = "#71b171";
});

//Login
// JavaScript để hiển thị và ẩn form đăng nhập
const loginBtn = document.getElementById('login');
const loginForm = document.querySelector('.login-form');
// const loginFormBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    loginForm.style.display = 'block';
});

// loginFormBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     loginForm.style.display = 'none';
// });

document.addEventListener('click', (event) => {
    const isClickInsideForm = loginForm.contains(event.target);
    const isClickOnLoginBtn = loginBtn.contains(event.target);

    if (!isClickInsideForm && !isClickOnLoginBtn) {
        loginForm.style.display = 'none';
    }
});


//Show language
document.addEventListener("DOMContentLoaded", function(){
    var toggleButton = document.getElementById("toggleButton");
    var myCard = document.getElementById("myCard");

    toggleButton.addEventListener("click", function(){
        if (myCard.style.display === "none") {
            myCard.style.display = "block";
        } else {
            myCard.style.display = "none";
        }
    });

    document.addEventListener("mouseup", function(e){
        var container = document.getElementById("myCard");
        if (!container.contains(e.target)){
            container.style.display = "none";
        }
    });
});