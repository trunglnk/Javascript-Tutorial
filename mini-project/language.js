function createListLanguages(){
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
    return card
}

export default createListLanguages