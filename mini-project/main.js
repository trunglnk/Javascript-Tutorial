
let navBar = document.createElement("div")
navBar.setAttribute("class", "navbar-me")
let logo = document.createElement("div")
logo.setAttribute("class", "logo")
let imgLogo = document.createElement("img")
imgLogo.setAttribute("src", 'zyro-image.png')
imgLogo.setAttribute("alt", "Logo")
imgLogo.setAttribute("style", "margin-top: 12px")
let ulMenu = document.createElement("ul")
ulMenu.setAttribute("class", "menu")

//icons
let listIcons = document.createElement("div")
listIcons.setAttribute("class", "icons")

let userIcon = document.createElement("a")
userIcon.setAttribute("id", "toggleButton")
let iIconUser = document.createElement("i")
iIconUser.setAttribute("class", "bx bxs-user")

let chatIcon = document.createElement("a")
chatIcon.setAttribute("href", "#")
let iIconChat = document.createElement("i")
iIconChat.setAttribute("class", "bx bxs-chat")

let searchIcon = document.createElement("a")
searchIcon .setAttribute("href", "#")
let iIconSearch = document.createElement("i")
iIconSearch.setAttribute("class", "bx bxs-search-alt-2")

let btnLogin = document.createElement("button")
btnLogin.setAttribute("id", "login")
btnLogin.setAttribute("class", "btn btn-light")
let aLogin = document.createElement("a")
aLogin.setAttribute("href", "#")
let textLogin = document.createTextNode("Login")
aLogin.appendChild(textLogin)

userIcon.appendChild(iIconUser)
chatIcon.appendChild(iIconChat)
searchIcon.appendChild(iIconSearch)
btnLogin.appendChild(aLogin)

listIcons.appendChild(userIcon)
listIcons.appendChild(chatIcon)
listIcons.appendChild(searchIcon)
listIcons.appendChild(btnLogin)

logo.appendChild(imgLogo)
logo.appendChild(ulMenu)

navBar.appendChild(logo)
navBar.appendChild(listIcons)
let body = document.querySelector("#content")
body.appendChild(navBar)

//Section Banner
let banner = document.createElement("div")
banner.setAttribute("class", "banner")

let bannerContent = document.createElement("div")
bannerContent.setAttribute("class", "banner-content")

let imgBanner = document.createElement("img")
imgBanner.setAttribute("src", "banner.jpg")

let bannerSearch = document.createElement("div")
bannerSearch.setAttribute("class", "banner-search")

let bannerHeader = document.createElement("div")
bannerHeader.setAttribute("class", "banner-header")
let textBannerHeader = document.createTextNode("GBIF | Global Biodiversity Information Facility")
bannerHeader.appendChild(textBannerHeader)

let h1 = document.createElement("h1")
let textH1 = document.createTextNode("Free and open access to biodiversity data")
h1.appendChild(textH1)

let filterGroup = document.createElement("div")
filterGroup.setAttribute("class", "filter-group")

let listGroup1 = document.createElement("div")
listGroup1.setAttribute("class", "list-group list-group-horizontal")

let aItem1 = document.createElement("a")
aItem1.setAttribute("class", "list-group-item text-uppercase rounded-0 border-0")
let aItem1Text = document.createTextNode("Occurrences")
aItem1.appendChild(aItem1Text)

let aItem2 = document.createElement("a")
aItem2.setAttribute("class", "list-group-item text-uppercase border-0")
let aItem2Text = document.createTextNode("Species")
aItem2.appendChild(aItem2Text)

let aItem3 = document.createElement("a")
aItem3.setAttribute("class", "list-group-item text-uppercase border-0")
let aItem3Text = document.createTextNode("Datasets")
aItem3.appendChild(aItem3Text)

let aItem4 = document.createElement("a")
aItem4.setAttribute("class", "list-group-item text-uppercase border-0")
let aItem4Text = document.createTextNode("Publishers")
aItem4.appendChild(aItem4Text)

let aItem5 = document.createElement("a")
aItem5.setAttribute("class", "list-group-item text-uppercase rounded-0 border-0")
let aItem5Text = document.createTextNode("Resources")
aItem5.appendChild(aItem5Text)

listGroup1.appendChild(aItem1)
listGroup1.appendChild(aItem2)
listGroup1.appendChild(aItem3)
listGroup1.appendChild(aItem4)
listGroup1.appendChild(aItem5)

let inputSearch = document.createElement("input")
inputSearch.setAttribute("class", "input-elevated")
inputSearch.setAttribute("type", "text")
inputSearch.setAttribute("placeholder", "Search")

let listGroup2 = document.createElement("div")
listGroup2.setAttribute("class", "list-group list-group-horizontal")

let aItem6 = document.createElement("a")
aItem6.setAttribute("class", "list-group-item text-uppercase rounded-0 border-0")
let aItem6Text = document.createTextNode("What is GBIF?")
aItem6.appendChild(aItem6Text)

let aItem7 = document.createElement("a")
aItem7.setAttribute("class", "list-group-item text-uppercase border-0")
let aItem7Text = document.createTextNode("About GBIF Viet Nam")
aItem7.appendChild(aItem7Text)

listGroup2.appendChild(aItem6)
listGroup2.appendChild(aItem7)

filterGroup.appendChild(listGroup1)
filterGroup.appendChild(inputSearch)
filterGroup.appendChild(listGroup2)

bannerSearch.appendChild(bannerHeader)
bannerSearch.appendChild(h1)
bannerSearch.appendChild(filterGroup)

bannerContent.appendChild(imgBanner)
bannerContent.appendChild(bannerSearch)

banner.appendChild(bannerContent)

body.appendChild(banner)

//LOGIN FORM
let loginFormCre = document.createElement("div")
loginFormCre.setAttribute("class", "login-form")

let ulLogin = document.createElement("ul")
ulLogin.setAttribute("class", "nav nav-tabs")

let liNav1 = document.createElement("li")
liNav1.setAttribute("class", "nav-item")
let aNav1 = document.createElement("a")
aNav1.setAttribute("class", "nav-link active")
aNav1.setAttribute("data-toggle", "tab")
aNav1.setAttribute("href", "#loginForm")
let textNav1 = document.createTextNode("Login")
aNav1.appendChild(textNav1)
liNav1.appendChild(aNav1)

let liNav2 = document.createElement("li")
liNav2.setAttribute("class", "nav-item")
let aNav2 = document.createElement("a")
aNav2.setAttribute("class", "nav-link")
aNav2.setAttribute("data-toggle", "tab")
aNav2.setAttribute("href", "#regForm")
let textNav2 = document.createTextNode("Register")
aNav2.appendChild(textNav2)
liNav2.appendChild(aNav2)

ulLogin.appendChild(liNav1)
ulLogin.appendChild(liNav2)

//Tab panes
let tabContent = document.createElement("div")
tabContent.setAttribute("class", "tab-content")
//FORM LOGIN
let formLogin = document.createElement("div")
formLogin.setAttribute("id", "loginForm")
formLogin.setAttribute("class", "container tab-pane active")

let brLogin = document.createElement("br")

let formLoginCr = document.createElement("form")

let contentInput1 = document.createElement("div")
contentInput1.setAttribute("class", "mb-3 mt-3")
let labelInput1 = document.createElement("label")
labelInput1.setAttribute("for", "email")
labelInput1.setAttribute("class", "form-label")
let textEmailLogin = document.createTextNode("Username or Email:")
labelInput1.appendChild(textEmailLogin)
let inputInput1 = document.createElement("input")
inputInput1.setAttribute("type", "email")
inputInput1.setAttribute("class", "form-control")
inputInput1.setAttribute("id", "email")
inputInput1.setAttribute("placeholder", "Enter email")
inputInput1.setAttribute("name", "email")
inputInput1.setAttribute("required", "")
contentInput1.appendChild(labelInput1)
contentInput1.appendChild(inputInput1)

let contentInput2 = document.createElement("div")
contentInput2.setAttribute("class", "mb-3")
let labelInput2 = document.createElement("label")
labelInput2.setAttribute("for", "pwd")
labelInput2.setAttribute("class", "form-label")
let textPwdLogin = document.createTextNode("Password:")
labelInput2.appendChild(textPwdLogin)
let inputInput2 = document.createElement("input")
inputInput2.setAttribute("type", "password")
inputInput2.setAttribute("class", "form-control")
inputInput2.setAttribute("id", "pwd")
inputInput2.setAttribute("placeholder", "Enter password")
inputInput2.setAttribute("name", "pswd")
inputInput2.setAttribute("required", "")
contentInput2.appendChild(labelInput2)
contentInput2.appendChild(inputInput2)

let buttonLogin = document.createElement("button")
buttonLogin.setAttribute("type", "submit")
buttonLogin.setAttribute("id", "loginBtn")
buttonLogin.setAttribute("class", "btn btn-success")
let textButtonLogin = document.createTextNode("Sign in")
buttonLogin.appendChild(textButtonLogin)

formLoginCr.appendChild(contentInput1)
formLoginCr.appendChild(contentInput2)
formLoginCr.appendChild(buttonLogin)

formLogin.appendChild(brLogin)
formLogin.appendChild(formLoginCr)

//FORM REGISTER
let formRegister = document.createElement("div")
formRegister.setAttribute("id", "regForm")
formRegister.setAttribute("class", "container tab-pane fade")

let brRegister = document.createElement("br")

let formRegCr = document.createElement("form")

let contentInput3 = document.createElement("div")
contentInput3.setAttribute("class", "mb-3 mt-3")
let labelInput3 = document.createElement("label")
labelInput3.setAttribute("for", "email")
labelInput3.setAttribute("class", "form-label")
let textEmailReg = document.createTextNode("Email:")
labelInput3.appendChild(textEmailReg)
let inputInput3 = document.createElement("input")
inputInput3.setAttribute("type", "email")
inputInput3.setAttribute("class", "form-control")
inputInput3.setAttribute("id", "res_email")
inputInput3.setAttribute("placeholder", "Enter email")
inputInput3.setAttribute("name", "Email")
inputInput3.setAttribute("required", "")

contentInput3.appendChild(labelInput3)
contentInput3.appendChild(inputInput3)

let contentInput4 = document.createElement("div")
contentInput4.setAttribute("class", "mb-3")
let labelInput4 = document.createElement("label")
labelInput4.setAttribute("for", "username")
labelInput4.setAttribute("class", "form-label")
let textUserNameReg = document.createTextNode("Username:")
labelInput4.appendChild(textUserNameReg)
let inputInput4 = document.createElement("input")
inputInput4.setAttribute("type", "text")
inputInput4.setAttribute("class", "form-control")
inputInput4.setAttribute("id", "res_username")
inputInput4.setAttribute("placeholder", "Enter username")
inputInput4.setAttribute("name", "username")
inputInput4.setAttribute("required", "")

contentInput4.appendChild(labelInput4)
contentInput4.appendChild(inputInput4)

let contentInput5 = document.createElement("div")
contentInput5.setAttribute("class", "mb-3")
let labelInput5 = document.createElement("label")
labelInput5.setAttribute("for", "pwd")
labelInput5.setAttribute("class", "form-label")
let textPwdReg = document.createTextNode("Password:")
labelInput5.appendChild(textPwdReg)
let inputInput5 = document.createElement("input")
inputInput5.setAttribute("type", "password")
inputInput5.setAttribute("class", "form-control")
inputInput5.setAttribute("id", "res_password")
inputInput5.setAttribute("placeholder", "Enter password")
inputInput5.setAttribute("name", "password")
inputInput5.setAttribute("required", "")

contentInput5.appendChild(labelInput5)
contentInput5.appendChild(inputInput5)

let buttonReg = document.createElement("button")
buttonReg.setAttribute("type", "submit")
buttonReg.setAttribute("class", "btn btn-success")
let textButtonReg = document.createTextNode("Sign up")
buttonReg.appendChild(textButtonReg)

formRegCr.appendChild(contentInput3)
formRegCr.appendChild(contentInput4)
formRegCr.appendChild(contentInput5)
formRegCr.appendChild(buttonReg)

formRegister.appendChild(brRegister)
formRegister.appendChild(formRegCr)

tabContent.appendChild(formLogin)
tabContent.appendChild(formRegister)

loginFormCre.appendChild(ulLogin)
loginFormCre.appendChild(tabContent)

banner.appendChild(loginFormCre)

//CREATE LIST LANGUAGE
let card = document.createElement("div")
card.setAttribute("class", "card")
card.setAttribute("id", "myCard")

let cardHeader = document.createElement("div")
cardHeader.setAttribute("class", "card-header")
let textCardHeader = document.createTextNode("Change Language")
cardHeader.appendChild(textCardHeader)

let cardBody = document.createElement("div")
cardBody.setAttribute("class", "card-body")

card.appendChild(cardHeader)
card.appendChild(cardBody)

let contentBody = document.createElement("div")
contentBody.setAttribute("class", "content")
contentBody.setAttribute("style", "height: 1000px")

body.appendChild(card)
body.appendChild(contentBody)
//Show menu
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
    let liParent = document.createElement("li")
    liParent.setAttribute("class", "dropdown")
    // let text = `<a href="#" class="dropbtn">${menus[i].name}</a>`
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "dropbtn");
    a.textContent = menus[i].name;

    liParent.appendChild(a);
    ul.appendChild(liParent)
    let child = menus[i].child_menu
    let drop = document.createElement("div")
    drop.setAttribute("class", "dropdown-content")

    for(let j = 0; j < child.length; j++){
        let itemDrop = document.createElement("div")
        itemDrop.setAttribute("class", "item-drop")
        let title = document.createElement("h2")
        title.textContent  = child[j].title

        itemDrop.appendChild(title)
        liParent.appendChild(drop)
        drop.appendChild(itemDrop)


        let ulChild = document.createElement("ul")
        ulChild.setAttribute("class", "list-group")
        let menuItem = child[j].menu_item

        for(let k = 0; k < menuItem.length; k++ ){
            let liItem = document.createElement("li")
            let aItem = document.createElement("a")
            aItem.setAttribute("href", "#")
            aItem.textContent = menuItem[k];

            liItem.appendChild(aItem)
            // item += `<li><a href="#">${menuItem[k]}</a></li>`
            ulChild.appendChild(liItem)

        }
        itemDrop.appendChild(ulChild)
    }
}

//render language
const languages = ['English', 'العربية', '简体中文', 'Français', 'Русский', 'Español', '繁體中文', '日本語', 'Português', 'Українська']
let listLanguage = document.querySelector(".card-body")

for (let i = 0; i < languages.length; i++){

    let formCheck = document.createElement("div")
    formCheck.setAttribute("class", "form-check")

    let input = document.createElement("input")
    input.setAttribute("class", "form-check-input")
    input.type = 'radio'
    input.name = 'language'
    input.id = `radio${i+1}`
    input.value = languages[i]

    let label = document.createElement('label');
    label.classList.add('form-check-label');
    label.htmlFor = `radio${i}`;
    label.textContent = languages[i];

    formCheck.appendChild(input);
    formCheck.appendChild(label);

    listLanguage.appendChild(formCheck);
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