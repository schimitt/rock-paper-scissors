function fPaper(){
    let bPaper = document.getElementById("button-paper")
    let bScissors = document.getElementById("button-scissors")
    let bRock = document.getElementById("button-rock")
    let dPaper = document.getElementById("div-paper")
    let dCentral = document.getElementById("div-central")
    let sOption = document.getElementById("opçao-computador")
    let vOption = document.getElementById("v-paper")
    let cOption = document.getElementById("c-scissors")
    let cRock = document.getElementById("c-rock")
    let drock = document.getElementById("div-rock")
    let win = document.getElementById("win")
    let lose = document.getElementById("lose")
    let divP2 = document.getElementById("div-ganhar-perder")
    let dScissors = document.getElementById("div-scissors")
    let jorgarDnovo = document.getElementById("jogar-novo")
    let contador = document.getElementById("contador")
    

    if(bPaper){
        vOption.classList.remove("d-none")
        bScissors.classList.add("d-none")
        bRock.classList.add("d-none")
        bPaper.classList.replace("w-8", "w-12")
        bPaper.classList.replace("h-8", "h-12")
        dPaper.classList.add("me-auto", "mrs-2")
        dCentral.classList.add("d-flex")
        sOption.classList.remove("d-none")
        sOption.classList.add("mrs-3", "mrt-3")
    }
    setTimeout(function(){
        if(Math.floor(Math.random() * 2 + 1) === 1){
            bScissors.classList.remove("d-none")
            bScissors.classList.replace("w-8", "w-12")
            bScissors.classList.replace("h-8", "h-12")
            bScissors.classList.add("mrs-3")
            sOption.classList.add("d-none")
            cOption.classList.remove("d-none")
            setTimeout(function(){
                divP2.classList.remove("d-none")
                divP2.classList.add("l", "r", "t", "absolute")
                win.classList.add("d-none")
                lose.classList.remove("d-none")
                dScissors.classList.add("mrs-13")
                dPaper.classList.remove("mrs-2")
                jorgarDnovo.addEventListener("click", function(){
                    if(jorgarDnovo){
                        vOption.classList.add("d-none")
                        vOption.classList.remove("mrs-3")
                        bScissors.classList.remove("d-none")
                        bRock.classList.remove("d-none", "mrs-3", "mrs-7")
                        bPaper.classList.replace("w-12", "w-8")
                        bPaper.classList.replace("h-12", "h-8")
                        dPaper.classList.remove("me-auto", "mrs-2", "mrs-16", "mrs-8", "me-auto", "-mt-3", "mrs-13")
                        dCentral.classList.remove("d-flex")
                        sOption.classList.add("d-none")
                        divP2.classList.add("d-none")
                        bRock.classList.replace("w-12", "w-8")
                        bRock.classList.replace("h-12", "h-8")
                        cRock.classList.add("d-none")
                        dScissors.classList.remove("mrs-13", "-ms-2", "mrs-2", "-mt-3")
                        drock.classList.remove("-mt-3", "mrs-7", "mrs-11", "mrs-3", "-mt-6")
                        cOption.classList.add("d-none")
                        bScissors.classList.replace("w-12", "w-8")
                        bScissors.classList.replace("h-12", "h-8")
                    }
                })
                if(contador.value <= 0){
                    return
                }
                contador.value--
            }, 200)
        } else {
            bRock.classList.remove("d-none")
            bRock.classList.replace("w-8", "w-12")
            bRock.classList.replace("h-8", "h-12")
            bRock.classList.add("mrs-3")
            sOption.classList.add("d-none")
            cRock.classList.remove("d-none")
            drock.classList.add("-mt-3")
            setTimeout(function(){
                divP2.classList.remove("d-none")
                divP2.classList.add("l", "r", "t", "absolute")
                lose.classList.add("d-none")
                win.classList.remove("d-none")
                drock.classList.add("mrs-7")
                dPaper.classList.remove("mrs-2")
                jorgarDnovo.addEventListener("click", function(){
                    if(jorgarDnovo){
                        vOption.classList.add("d-none", "mrs-3")
                        bScissors.classList.remove("d-none")
                        bRock.classList.remove("d-none", "mrs-3")
                        bPaper.classList.replace("w-12", "w-8")
                        bPaper.classList.replace("h-12", "h-8")
                        dPaper.classList.remove("me-auto", "mrs-2")
                        dCentral.classList.remove("d-flex")
                        sOption.classList.add("d-none")
                        divP2.classList.add("d-none")
                        bRock.classList.replace("w-12", "w-8")
                        bRock.classList.replace("h-12", "h-8")
                        cRock.classList.add("d-none")
                        drock.classList.remove("-mt-3", "mrs-7")
                        cOption.classList.add("d-none")
                        bScissors.classList.replace("w-12", "w-8")
                        bScissors.classList.replace("h-12", "h-8")
                        divP2.classList.remove("left2")
                    }
                })
                contador.value++
            }, 200)
        }

    }, 2000)
}

function fScissors(){
    let bPaper = document.getElementById("button-paper")
    let bScissors = document.getElementById("button-scissors")
    let bRock = document.getElementById("button-rock")
    let dScissors = document.getElementById("div-scissors")
    let dCentral = document.getElementById("div-central")
    let sOption = document.getElementById("opçao-computador")
    let vOption = document.getElementById("v-scissors")
    let cOption = document.getElementById("c-rock")
    let drock = document.getElementById("div-rock")
    let lose = document.getElementById("lose")
    let win = document.getElementById("win")
    let divP2 = document.getElementById("div-ganhar-perder")
    let cPaper = document.getElementById("c-paper")
    let dCentral2 = document.getElementById("div-central-2")
    let dPaper = document.getElementById("div-paper")
    let jorgarDnovo = document.getElementById("jogar-novo")
    let contador = document.getElementById("contador")

    if(bScissors){
        bPaper.classList.add("d-none")
        bRock.classList.add("d-none")
        bScissors.classList.replace("w-8", "w-12")
        bScissors.classList.replace("h-8", "h-12")
        dScissors.classList.add("mrs-2")
        dScissors.classList.remove("mrs-8")
        dCentral.classList.add("d-flex")
        sOption.classList.remove("d-none")
        sOption.classList.add("mrs-9")
        vOption.classList.remove("d-none")
    }
    setTimeout(function(){
        if(Math.floor(Math.random() * 2 + 1) === 1){
            bRock.classList.remove("d-none")
            bRock.classList.replace("w-8", "w-12")
            bRock.classList.replace("h-8", "h-12")
            bRock.classList.add("mrs-7")
            sOption.classList.add("d-none")
            cOption.classList.remove("d-none")
            cOption.classList.add("-mt-3", "mrs-6")
            drock.classList.add("mrs-3")
            setTimeout(function(){
                divP2.classList.remove("d-none")
                divP2.classList.add("l", "r", "t", "absolute")
                lose.classList.remove("d-none")
                win.classList.add("d-none")
                drock.classList.add("mrs-8")
                dScissors.classList.remove("-ms-2", "mrs-2", "mrs-1")
                jorgarDnovo.addEventListener("click", function(){
                    if(jorgarDnovo){
                        divP2.classList.add("d-none")
                        drock.classList.remove("mrs-11", "mrs-3", "mrs-8")
                        bRock.classList.replace("h-12", "h-8")
                        bRock.classList.replace("w-12", "w-8")
                        bPaper.classList.remove("d-none")
                        bRock.classList.remove("d-none", "mrs-7")
                        bScissors.classList.replace("w-12", "w-8")
                        bScissors.classList.replace("h-12", "h-8")
                        dScissors.classList.remove("mrs-2", "-ms-2")
                        dScissors.classList.add("mrs-8")
                        dCentral.classList.remove("d-flex")
                        sOption.classList.add("d-none")
                        vOption.classList.add("d-none")
                        cOption.classList.add("d-none")
                        divP2.classList.remove("left3")
                    }
                })
                if(contador.value <= 0){
                    return
                }
                contador.value--
            }, 200)
        } else {
            bPaper.classList.remove("d-none")
            bPaper.classList.replace("w-8", "w-12")
            bPaper.classList.replace("h-8", "h-12")
            bPaper.classList.add("mrs-7")
            sOption.classList.add("d-none")
            drock.classList.add("mrs-3")
            cPaper.classList.remove("d-none")
            bPaper.classList.remove("mrs-7")
            dCentral2.classList.add("flex-row-reverse")
            dPaper.classList.add("mrs-8")
                setTimeout(function(){
                    divP2.classList.remove("d-none")
                    divP2.classList.add("l", "r", "t", "absolute")
                    lose.classList.add("d-none")
                    win.classList.remove("d-none")
                    dPaper.classList.add("mrs-13")
                    drock.classList.remove("mrs-3")
                    dScissors.classList.replace("mrs-2", "mrs-1")
                    jorgarDnovo.addEventListener("click", function(){
                        if(jorgarDnovo){
                            divP2.classList.add("d-none")
                            drock.classList.remove("mrs-11", "mrs-3")
                            bRock.classList.replace("h-12", "h-8")
                            bRock.classList.replace("w-12", "w-8")
                            bPaper.classList.replace("w-12", "w-8")
                            bPaper.classList.replace("h-12", "h-8")
                            dScissors.classList.add("-ms-2")
                            dCentral2.classList.remove("flex-row-reverse")
                            bPaper.classList.remove("d-none")
                            bRock.classList.remove("d-none", "mrs-7")
                            bScissors.classList.replace("w-12", "w-8")
                            bScissors.classList.replace("h-12", "h-8")
                            dScissors.classList.remove("mrs-2", "-ms-2")
                            dScissors.classList.add("mrs-8")
                            dCentral.classList.remove("d-flex")
                            sOption.classList.add("d-none")
                            vOption.classList.add("d-none")
                            cOption.classList.add("d-none")
                            cPaper.classList.add("d-none")
                            dPaper.classList.remove("mrs-13", "mrs-8")
                        }
                    })
                    contador.value++
                }, 200)
        }
    }, 2000)
}
function fRock(){
    let bPaper = document.getElementById("button-paper")
    let bScissors = document.getElementById("button-scissors")
    let bRock = document.getElementById("button-rock")
    let dPaper = document.getElementById("div-paper")
    let dCentral = document.getElementById("div-central")
    let sOption = document.getElementById("opçao-computador")
    let drock = document.getElementById("div-rock")
    let vRock = document.getElementById("v-rock")
    let cPaper = document.getElementById("c-paper")
    let win = document.getElementById("win")
    let lose = document.getElementById("lose")
    let divP2 = document.getElementById("div-ganhar-perder")
    let dScissors = document.getElementById("div-scissors")
    let cScissors = document.getElementById("c-scissors")
    let jorgarDnovo = document.getElementById("jogar-novo")
    let contador = document.getElementById("contador")

    if(bRock){
        bScissors.classList.add("d-none")
        bPaper.classList.add("d-none")
        bRock.classList.replace("w-8", "w-12")
        bRock.classList.replace("h-8", "h-12")
        dPaper.classList.add("me-auto", "mrs-2")
        dCentral.classList.add("d-flex" )
        sOption.classList.remove("d-none")
        sOption.classList.add("mrs-7")
        vRock.classList.remove("d-none")
        drock.classList.add("-mt-6", "-ms-5")

    }
    setTimeout(function(){
        if(Math.floor(Math.random() * 2 + 1) === 1){
            bPaper.classList.remove("d-none")
            bPaper.classList.replace("w-8", "w-12")
            bPaper.classList.replace("h-8", "h-12")
            dPaper.classList.add("mrt-1", "mrs-13")
            sOption.classList.add("d-none")
            dCentral.classList.add("flex-row-reverse")
            cPaper.classList.remove("d-none")
            drock.classList.remove("-mt-6", "-ms-5")
            drock.classList.add("-mt-2")
            setTimeout(function(){
                divP2.classList.remove("d-none")
                divP2.classList.add("l", "r", "t", "absolute")
                win.classList.add("d-none")
                lose.classList.remove("d-none")
                dPaper.classList.add("mrs-17")
                dScissors.classList.remove("mrs-8")
                jorgarDnovo.addEventListener("click", function(){
                    if(jorgarDnovo){
                        divP2.classList.add("d-none")
                        divP2.classList.remove("left3")
                        drock.classList.remove("mrs-11", "mrs-3", "-mt-6")
                        bRock.classList.replace("h-12", "h-8")
                        bRock.classList.replace("w-12", "w-8")
                        bPaper.classList.remove("d-none")
                        drock.classList.remove("-mt-2")
                        bScissors.classList.remove("d-none")
                        bRock.classList.remove("d-none", "mrs-7")
                        bScissors.classList.replace("w-12", "w-8")
                        bScissors.classList.replace("h-12", "h-8")
                        dScissors.classList.add("mrs-8")
                        bPaper.classList.replace("w-12", "w-8")
                        bPaper.classList.replace("h-12", "h-8")
                        dCentral.classList.remove("flex-row-reverse")
                        dCentral.classList.remove("d-flex")
                        sOption.classList.add("d-none")
                        vRock.classList.add("d-none")
                        cPaper.classList.add("d-none")
                        dPaper.classList.remove("me-auto", "-mt-3", "mrs-13", "mrs-2", "mrt-1")
                    }
                })
                if(contador.value <= 0){
                    return
                }
                contador.value--
            }, 200)
        } else {
            bScissors.classList.remove("d-none")
            bScissors.classList.replace("w-8", "w-12")
            bScissors.classList.replace("h-8", "h-12")
            dScissors.classList.add("-mt-3", "mrs-13")
            sOption.classList.add("d-none")
            dCentral.classList.add("flex-row-reverse")
            cScissors.classList.remove("d-none")
            drock.classList.remove("-ms-5")
            setTimeout(function(){
                divP2.classList.remove("d-none")
                divP2.classList.add("l", "r", "t", "absolute")
                win.classList.remove("d-none")
                lose.classList.add("d-none")
                dPaper.classList.remove("mrs-2")
                dScissors.classList.replace("-mt-3", "mrt-1")
                drock.classList.replace("-mt-6", "-mt-2")
                jorgarDnovo.addEventListener("click", function(){
                    if(jorgarDnovo){
                        divP2.classList.add("d-none")
                        drock.classList.remove("mrs-11", "mrs-3", "-mt-6", "-mt-2")
                        bRock.classList.replace("h-12", "h-8")
                        bRock.classList.replace("w-12", "w-8")
                        dScissors.classList.add( "mrs-8")
                        bPaper.classList.remove("d-none")
                        bScissors.classList.remove("d-none")
                        bRock.classList.remove("d-none", "mrs-7")
                        bScissors.classList.replace("w-12", "w-8")
                        bScissors.classList.replace("h-12", "h-8")
                        bPaper.classList.replace("w-12", "w-8")
                        bPaper.classList.replace("h-12", "h-8")
                        dScissors.classList.remove("mrt-1", "-ms-2", "-mt-3", "mrs-13")
                        dCentral.classList.remove("flex-row-reverse")
                        dCentral.classList.remove("d-flex")
                        sOption.classList.add("d-none")
                        vRock.classList.add("d-none")
                        cPaper.classList.add("d-none")
                        cScissors.classList.add("d-none")
                        dPaper.classList.remove("me-auto", "-mt-3", "mrs-13", "mrs-2")
                    }
                })
                contador.value++
            }, 200)
        }
    }, 2000)
}


(function() {
    window.addEventListener("DOMContentLoaded", function()  {
        let bPaper = document.getElementById("button-paper")
        let bScissors = document.getElementById("button-scissors")
        let bRock = document.getElementById("button-rock")

        bPaper.addEventListener("click", fPaper)
        bScissors.addEventListener("click", fScissors)
        bRock.addEventListener("click", fRock)
    });
  })();