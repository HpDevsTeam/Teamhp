const ligar = () => {
    const l = document.querySelector(".menumobile")
    l.style.display = "block"
}

const desligar = () => {
    const l = document.querySelector(".menumobile")
    l.style.display = "none"
}

const baixar = () => {
    const obter = document.querySelector(".downlo")
    if (obter.style.display === "none") {
        obter.style.display = "block"
    }
    else{
        obter.style.display = "none"
    }
}