function createBanner(){
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

    return banner
}

export default createBanner