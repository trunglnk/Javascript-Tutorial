//Section navBar
function createNavbar(){
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

    return navBar
}

export default createNavbar