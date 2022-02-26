//Palavra certa
var palavraCerta = ["f", "a", "i", "g", "e"]

//Função para trocar para o próximo input quando alguma letra for digitada
function trocarPosicao(field, autoMove){
if(field.value.length >= field.maxLength){
    document.getElementById(autoMove).focus()
}
}

//Função para localizar as letras correspondentes da primeira linha
function localizar(){
    //Variáveis de valor dos inputs
    let l1 = document.getElementById("L1").value
    let l2 = document.getElementById("L2").value
    let l3 = document.getElementById("L3").value
    let l4 = document.getElementById("L4").value
    let l5 = document.getElementById("L5").value

    //Variáveis da posição das letras
    var posicaol1 = palavraCerta.indexOf(l1)
    var posicaol2 = palavraCerta.indexOf(l2)
    var posicaol3 = palavraCerta.indexOf(l3)
    var posicaol4 = palavraCerta.indexOf(l4)
    var posicaol5 = palavraCerta.indexOf(l5)


    //Condicionais para verificar se o posicionamento das letras está correto
    if(l1 != "" && l2 != "" && l3 != "" && l4 != "" && l5 != ""){
        if(posicaol1 == -1){
            document.getElementById("L1").style.backgroundColor = "red"
        }else if(posicaol1 == 0 || l1 == palavraCerta[0]){
            document.getElementById("L1").style.backgroundColor = "green"
        }else{
            document.getElementById("L1").style.backgroundColor = "#D3AD69"
        }

        if(posicaol2 == -1){
            document.getElementById("L2").style.backgroundColor = "red"
        }else if(posicaol2 == 1 || l2 == palavraCerta[1]){
            document.getElementById("L2").style.backgroundColor = "green"
        }else{
            document.getElementById("L2").style.backgroundColor = "#D3AD69"
        }

        if(posicaol3 == -1){
            document.getElementById("L3").style.backgroundColor = "red"
        }else if(posicaol3 == 2 || l3 == palavraCerta[2]){
            document.getElementById("L3").style.backgroundColor = "green"
        }else{
            document.getElementById("L3").style.backgroundColor = "#D3AD69"
        }

        if(posicaol4 == -1){
            document.getElementById("L4").style.backgroundColor = "red"
        }else if(posicaol4 == 3 || l4 == palavraCerta[3]){
            document.getElementById("L4").style.backgroundColor = "green"
        }else{
            document.getElementById("L4").style.backgroundColor = "#D3AD69"
        }

        if(posicaol5 == -1){
            document.getElementById("L5").style.backgroundColor = "red"
        }else if(posicaol5 == 4 || l5 == palavraCerta[4]){
            document.getElementById("L5").style.backgroundColor = "green"
        }else{
            document.getElementById("L5").style.backgroundColor = "#D3AD69"
        }

        document.getElementById("L1").disabled = true
        document.getElementById("L2").disabled = true
        document.getElementById("L3").disabled = true
        document.getElementById("L4").disabled = true
        document.getElementById("L5").disabled = true
    
        document.getElementById("L6").disabled = false
        document.getElementById("L7").disabled = false
        document.getElementById("L8").disabled = false
        document.getElementById("L9").disabled = false
        document.getElementById("L10").disabled = false
    
        document.getElementById("L6").style.backgroundColor = "transparent"
        document.getElementById("L7").style.backgroundColor = "transparent"
        document.getElementById("L8").style.backgroundColor = "transparent"
        document.getElementById("L9").style.backgroundColor = "transparent"
        document.getElementById("L10").style.backgroundColor = "transparent"
    
        document.getElementById("bttn").style.display = "none"
        document.getElementById("bttn2").style.display = "inline"

    }else{
        alert("Preencha todos os campos")
    }
    setTimeout(() => {if((posicaol1 == 0 || l1 == palavraCerta[0]) && (posicaol2 == 1 || l2 == palavraCerta[1]) && (posicaol3 == 2 || l3 == palavraCerta[2]) 
        && (posicaol4 == 3 || l4 == palavraCerta[3]) && (posicaol5 == 4 || l5 == palavraCerta[4]) ){
            document.getElementById("resultado").innerText = "Você acertou"
            document.getElementById("resultado").style.backgroundColor = "green"

            document.getElementById("L6").disabled = true
            document.getElementById("L7").disabled = true
            document.getElementById("L8").disabled = true
            document.getElementById("L9").disabled = true
            document.getElementById("L10").disabled = true

            document.getElementById("L6").style.backgroundColor = "#4C4347"
            document.getElementById("L7").style.backgroundColor = "#4C4347"
            document.getElementById("L8").style.backgroundColor = "#4C4347"
            document.getElementById("L9").style.backgroundColor = "#4C4347"
            document.getElementById("L10").style.backgroundColor = "#4C4347"
        }}, 0)
}



//Função para localizar as letras correspondentes da segunda linha
function localizar2(){
    //Variáveis de valor dos inputs
    let l6 = document.getElementById("L6").value
    let l7 = document.getElementById("L7").value
    let l8 = document.getElementById("L8").value
    let l9 = document.getElementById("L9").value
    let l10 = document.getElementById("L10").value

    //Variáveis da posição das letras
    var posicaol6 = palavraCerta.indexOf(l6)
    var posicaol7 = palavraCerta.indexOf(l7)
    var posicaol8 = palavraCerta.indexOf(l8)
    var posicaol9 = palavraCerta.indexOf(l9)
    var posicaol10 = palavraCerta.indexOf(l10)


    //Condicionais para verificar se o posicionamento das letras está correto
    if(l6 != "" && l7 != "" && l8 != "" && l9 != "" && l10 != ""){
        if(posicaol6 == -1){
            document.getElementById("L6").style.backgroundColor = "red"
        }else if(posicaol6 == 0 || l6 == palavraCerta[0]){
            document.getElementById("L6").style.backgroundColor = "green"
        }else{
            document.getElementById("L6").style.backgroundColor = "#D3AD69"
        }
    
        if(posicaol7 == -1){
            document.getElementById("L7").style.backgroundColor = "red"
        }else if(posicaol7 == 1 || l7 == palavraCerta[1]){
            document.getElementById("L7").style.backgroundColor = "green"
        }else{
            document.getElementById("L7").style.backgroundColor = "#D3AD69"
        }
    
        if(posicaol8 == -1){
            document.getElementById("L8").style.backgroundColor = "red"
        }else if(posicaol8 == 2 || l8 == palavraCerta[2]){
            document.getElementById("L8").style.backgroundColor = "green"
        }else{
            document.getElementById("L8").style.backgroundColor = "#D3AD69"
        }
    
        if(posicaol9 == -1){
            document.getElementById("L9").style.backgroundColor = "red"
        }else if(posicaol9 == 3 || l9 == palavraCerta[3]){
            document.getElementById("L9").style.backgroundColor = "green"
        }else{
            document.getElementById("L9").style.backgroundColor = "#D3AD69"
        }
    
        if(posicaol10 == -1){
            document.getElementById("L10").style.backgroundColor = "red"
        }else if(posicaol10 == 4 || l10 == palavraCerta[4]){
            document.getElementById("L10").style.backgroundColor = "green"
        }else{
            document.getElementById("L10").style.backgroundColor = "#D3AD69"
        }
    
        document.getElementById("L6").disabled = true
        document.getElementById("L7").disabled = true
        document.getElementById("L8").disabled = true
        document.getElementById("L9").disabled = true
        document.getElementById("L10").disabled = true
    
        document.getElementById("L11").disabled = false
        document.getElementById("L12").disabled = false
        document.getElementById("L13").disabled = false
        document.getElementById("L14").disabled = false
        document.getElementById("L15").disabled = false
    
        document.getElementById("L11").style.backgroundColor = "transparent"
        document.getElementById("L12").style.backgroundColor = "transparent"
        document.getElementById("L13").style.backgroundColor = "transparent"
        document.getElementById("L14").style.backgroundColor = "transparent"
        document.getElementById("L15").style.backgroundColor = "transparent"
    
        document.getElementById("bttn2").style.display = "none"
        document.getElementById("bttn3").style.display = "inline"
    }else{
        alert("Preencha todos os campos")
    }
    setTimeout(() => {if((posicaol6 == 0 || l6 == palavraCerta[0]) && (posicaol7 == 1 || l7 == palavraCerta[1]) && (posicaol8 == 2 || l8 == palavraCerta[2]) 
        && (posicaol9 == 3 || l9 == palavraCerta[3]) && (posicaol10 == 4 || l10 == palavraCerta[4]) ){
            document.getElementById("resultado").innerText = "Você acertou"
            document.getElementById("resultado").style.backgroundColor = "green"

            document.getElementById("L11").disabled = true
            document.getElementById("L12").disabled = true
            document.getElementById("L13").disabled = true
            document.getElementById("L14").disabled = true
            document.getElementById("L15").disabled = true

            document.getElementById("L11").style.backgroundColor = "#4C4347"
            document.getElementById("L12").style.backgroundColor = "#4C4347"
            document.getElementById("L13").style.backgroundColor = "#4C4347"
            document.getElementById("L14").style.backgroundColor = "#4C4347"
            document.getElementById("L15").style.backgroundColor = "#4C4347"
        }}, 0)
}


//Função para localizar as letras correspondentes da terceira linha
function localizar3(){

    //Variáveis de valor dos inputs
    let l11 = document.getElementById("L11").value
    let l12 = document.getElementById("L12").value
    let l13 = document.getElementById("L13").value
    let l14 = document.getElementById("L14").value
    let l15 = document.getElementById("L15").value

    //Variáveis da posição das letras
    var posicaol11 = palavraCerta.indexOf(l11)
    var posicaol12 = palavraCerta.indexOf(l12)
    var posicaol13 = palavraCerta.indexOf(l13)
    var posicaol14 = palavraCerta.indexOf(l14)
    var posicaol15 = palavraCerta.indexOf(l15)


    //Condicionais para verificar se o posicionamento das letras está correto
    if(l11 != "" && l12 != "" && l13 != "" && l14 != "" && l15 != ""){
        if(posicaol11 == -1){
            document.getElementById("L11").style.backgroundColor = "red"
        }else if(posicaol11 == 0 || l11 == palavraCerta[0]){
            document.getElementById("L11").style.backgroundColor = "green"
        }else{
            document.getElementById("L11").style.backgroundColor = "#D3AD69"
        }

        if(posicaol12 == -1){
            document.getElementById("L12").style.backgroundColor = "red"
        }else if(posicaol12 == 1 || l12 == palavraCerta[1]){
            document.getElementById("L12").style.backgroundColor = "green"
        }else{
            document.getElementById("L12").style.backgroundColor = "#D3AD69"
        }

        if(posicaol13 == -1){
            document.getElementById("L13").style.backgroundColor = "red"
        }else if(posicaol13 == 2 || l13 == palavraCerta[2]){
            document.getElementById("L13").style.backgroundColor = "green"
        }else{
            document.getElementById("L13").style.backgroundColor = "#D3AD69"
        }

        if(posicaol14 == -1){
            document.getElementById("L14").style.backgroundColor = "red"
        }else if(posicaol14 == 3 || l14 == palavraCerta[3]){
            document.getElementById("L14").style.backgroundColor = "green"
        }else{
            document.getElementById("L14").style.backgroundColor = "#D3AD69"
        }

        if(posicaol15 == -1){
            document.getElementById("L15").style.backgroundColor = "red"
        }else if(posicaol15 == 4 || l15 == palavraCerta[4]){
            document.getElementById("L15").style.backgroundColor = "green"
        }else{
            document.getElementById("L15").style.backgroundColor = "#D3AD69"
        }

        document.getElementById("L11").disabled = true
        document.getElementById("L12").disabled = true
        document.getElementById("L13").disabled = true
        document.getElementById("L14").disabled = true
        document.getElementById("L15").disabled = true

        document.getElementById("L16").disabled = false
        document.getElementById("L17").disabled = false
        document.getElementById("L18").disabled = false
        document.getElementById("L19").disabled = false
        document.getElementById("L20").disabled = false

        document.getElementById("L16").style.backgroundColor = "transparent"
        document.getElementById("L17").style.backgroundColor = "transparent"
        document.getElementById("L18").style.backgroundColor = "transparent"
        document.getElementById("L19").style.backgroundColor = "transparent"
        document.getElementById("L20").style.backgroundColor = "transparent"

        document.getElementById("bttn3").style.display = "none"
        document.getElementById("bttn4").style.display = "inline"
    }else{
        alert("Preencha todos os campos")
    }
    setTimeout(() => {if((posicaol11 == 0 || l11 == palavraCerta[0]) && (posicaol12 == 1 || l12 == palavraCerta[1]) && (posicaol13 == 2 || l13 == palavraCerta[2]) 
        && (posicaol14 == 3 || l14 == palavraCerta[3]) && (posicaol15 == 4 || l15 == palavraCerta[4]) ){
            document.getElementById("resultado").innerText = "Você acertou"
            document.getElementById("resultado").style.backgroundColor = "green"

            document.getElementById("L16").disabled = true
            document.getElementById("L17").disabled = true
            document.getElementById("L18").disabled = true
            document.getElementById("L19").disabled = true
            document.getElementById("L20").disabled = true

            document.getElementById("L16").style.backgroundColor = "#4C4347"
            document.getElementById("L17").style.backgroundColor = "#4C4347"
            document.getElementById("L18").style.backgroundColor = "#4C4347"
            document.getElementById("L19").style.backgroundColor = "#4C4347"
            document.getElementById("L20").style.backgroundColor = "#4C4347"
        }}, 0)
}



//Função para localizar as letras correspondentes da quarta linha
function localizar4(){

    //Variáveis de valor dos inputs
    let l16 = document.getElementById("L16").value
    let l17 = document.getElementById("L17").value
    let l18 = document.getElementById("L18").value
    let l19 = document.getElementById("L19").value
    let l20 = document.getElementById("L20").value

    //Variáveis da posição das letras
    var posicaol16 = palavraCerta.indexOf(l16)
    var posicaol17 = palavraCerta.indexOf(l17)
    var posicaol18 = palavraCerta.indexOf(l18)
    var posicaol19 = palavraCerta.indexOf(l19)
    var posicaol20 = palavraCerta.indexOf(l20)


    //Condicionais para verificar se o posicionamento das letras está correto
    if(l16 != "" && l17 != "" && l18 != "" && l19 != "" && l20 != ""){
        if(posicaol16 == -1){
            document.getElementById("L16").style.backgroundColor = "red"
        }else if(posicaol16 == 0 || l16 == palavraCerta[0]){
            document.getElementById("L16").style.backgroundColor = "green"
        }else{
            document.getElementById("L16").style.backgroundColor = "#D3AD69"
        }

        if(posicaol17 == -1){
            document.getElementById("L17").style.backgroundColor = "red"
        }else if(posicaol17 == 1 || l17 == palavraCerta[1]){
            document.getElementById("L17").style.backgroundColor = "green"
        }else{
            document.getElementById("L17").style.backgroundColor = "#D3AD69"
        }

        if(posicaol18 == -1){
            document.getElementById("L18").style.backgroundColor = "red"
        }else if(posicaol18 == 2 || l18 == palavraCerta[2]){
            document.getElementById("L18").style.backgroundColor = "green"
        }else{
            document.getElementById("L18").style.backgroundColor = "#D3AD69"
        }

        if(posicaol19 == -1){
            document.getElementById("L19").style.backgroundColor = "red"
        }else if(posicaol19 == 3 || l19 == palavraCerta[3]){
            document.getElementById("L19").style.backgroundColor = "green"
        }else{
            document.getElementById("L19").style.backgroundColor = "#D3AD69"
        }

        if(posicaol20 == -1){
            document.getElementById("L20").style.backgroundColor = "red"
        }else if(posicaol20 == 4 || l20 == palavraCerta[4]){
            document.getElementById("L20").style.backgroundColor = "green"
        }else{
            document.getElementById("L20").style.backgroundColor = "#D3AD69"
        }

        document.getElementById("L16").disabled = true
        document.getElementById("L17").disabled = true
        document.getElementById("L18").disabled = true
        document.getElementById("L19").disabled = true
        document.getElementById("L20").disabled = true

        document.getElementById("L21").disabled = false
        document.getElementById("L22").disabled = false
        document.getElementById("L23").disabled = false
        document.getElementById("L24").disabled = false
        document.getElementById("L25").disabled = false

        document.getElementById("L21").style.backgroundColor = "transparent"
        document.getElementById("L22").style.backgroundColor = "transparent"
        document.getElementById("L23").style.backgroundColor = "transparent"
        document.getElementById("L24").style.backgroundColor = "transparent"
        document.getElementById("L25").style.backgroundColor = "transparent"

        document.getElementById("bttn4").style.display = "none"
        document.getElementById("bttn5").style.display = "inline"
    }else{
        alert("Preencha todos os campos")
    }
    setTimeout(() => {if((posicaol16 == 0 || l16 == palavraCerta[0]) && (posicaol17 == 1 || l17 == palavraCerta[1]) && (posicaol18 == 2 || l18 == palavraCerta[2]) 
        && (posicaol19 == 3 || l19 == palavraCerta[3]) && (posicaol20 == 4 || l20 == palavraCerta[4]) ){
            document.getElementById("resultado").innerText = "Você acertou"
            document.getElementById("resultado").style.backgroundColor = "green"

            document.getElementById("L21").disabled = true
            document.getElementById("L22").disabled = true
            document.getElementById("L23").disabled = true
            document.getElementById("L24").disabled = true
            document.getElementById("L25").disabled = true

            document.getElementById("L21").style.backgroundColor = "#4C4347"
            document.getElementById("L22").style.backgroundColor = "#4C4347"
            document.getElementById("L23").style.backgroundColor = "#4C4347"
            document.getElementById("L24").style.backgroundColor = "#4C4347"
            document.getElementById("L25").style.backgroundColor = "#4C4347"

        }}, 0)
}


//Função para localizar as letras correspondentes da quinta linha
function localizar5(){

    //Variáveis de valor dos inputs
    let l21 = document.getElementById("L21").value
    let l22 = document.getElementById("L22").value
    let l23 = document.getElementById("L23").value
    let l24 = document.getElementById("L24").value
    let l25 = document.getElementById("L25").value

    //Variáveis da posição das letras
    var posicaol21 = palavraCerta.indexOf(l21)
    var posicaol22 = palavraCerta.indexOf(l22)
    var posicaol23 = palavraCerta.indexOf(l23)
    var posicaol24 = palavraCerta.indexOf(l24)
    var posicaol25 = palavraCerta.indexOf(l25)


    //Condicionais para verificar se o posicionamento das letras está correto
    if(l21 != "" && l22 != "" && l23 != "" && l24 != "" && l25 != ""){
        if(posicaol21 == -1){
            document.getElementById("L21").style.backgroundColor = "red"
        }else if(posicaol21 == 0 || l21 == palavraCerta[0]){
            document.getElementById("L21").style.backgroundColor = "green"
        }else{
            document.getElementById("L21").style.backgroundColor = "#D3AD69"
        }

        if(posicaol22 == -1){
            document.getElementById("L22").style.backgroundColor = "red"
        }else if(posicaol22 == 1 || l22 == palavraCerta[1]){
            document.getElementById("L22").style.backgroundColor = "green"
        }else{
            document.getElementById("L22").style.backgroundColor = "#D3AD69"
        }

        if(posicaol23 == -1){
            document.getElementById("L23").style.backgroundColor = "red"
        }else if(posicaol23 == 2 || l23 == palavraCerta[2]){
            document.getElementById("L23").style.backgroundColor = "green"
        }else{
            document.getElementById("L23").style.backgroundColor = "#D3AD69"
        }

        if(posicaol24 == -1){
            document.getElementById("L24").style.backgroundColor = "red"
        }else if(posicaol24 == 3 || l24 == palavraCerta[3]){
            document.getElementById("L24").style.backgroundColor = "green"
        }else{
            document.getElementById("L24").style.backgroundColor = "#D3AD69"
        }

        if(posicaol25 == -1){
            document.getElementById("L25").style.backgroundColor = "red"
        }else if(posicaol25 == 4 || l25 == palavraCerta[4]){
            document.getElementById("L25").style.backgroundColor = "green"
        }else{
            document.getElementById("L25").style.backgroundColor = "#D3AD69"
        }

        document.getElementById("L21").disabled = true
        document.getElementById("L22").disabled = true
        document.getElementById("L23").disabled = true
        document.getElementById("L24").disabled = true
        document.getElementById("L25").disabled = true

        document.getElementById("L26").disabled = false
        document.getElementById("L27").disabled = false
        document.getElementById("L28").disabled = false
        document.getElementById("L29").disabled = false
        document.getElementById("L30").disabled = false

        document.getElementById("L26").style.backgroundColor = "transparent"
        document.getElementById("L27").style.backgroundColor = "transparent"
        document.getElementById("L28").style.backgroundColor = "transparent"
        document.getElementById("L29").style.backgroundColor = "transparent"
        document.getElementById("L30").style.backgroundColor = "transparent"

        document.getElementById("bttn5").style.display = "none"
        document.getElementById("bttn6").style.display = "inline"
    }else{
        alert("Preencha todos os campos")
    }
    setTimeout(() => {if((posicaol21 == 0 || l21 == palavraCerta[0]) && (posicaol22 == 1 || l22 == palavraCerta[1]) && (posicaol23 == 2 || l23 == palavraCerta[2]) 
        && (posicaol24 == 3 || l24 == palavraCerta[3]) && (posicaol25 == 4 || l25 == palavraCerta[4]) ){
            document.getElementById("resultado").innerText = "Você acertou"
            document.getElementById("resultado").style.backgroundColor = "green"

            document.getElementById("L26").disabled = true
            document.getElementById("L27").disabled = true
            document.getElementById("L28").disabled = true
            document.getElementById("L29").disabled = true
            document.getElementById("L30").disabled = true

            document.getElementById("L26").style.backgroundColor = "#4C4347"
            document.getElementById("L27").style.backgroundColor = "#4C4347"
            document.getElementById("L28").style.backgroundColor = "#4C4347"
            document.getElementById("L29").style.backgroundColor = "#4C4347"
            document.getElementById("L30").style.backgroundColor = "#4C4347"

        }}, 0)
}



//Função para localizar as letras correspondentes da sexta linha
function localizar6(){

    //Variáveis de valor dos inputs
    let l26 = document.getElementById("L26").value
    let l27 = document.getElementById("L27").value
    let l28 = document.getElementById("L28").value
    let l29 = document.getElementById("L29").value
    let l30 = document.getElementById("L30").value

    //Variáveis da posição das letras
    var posicaol26 = palavraCerta.indexOf(l26)
    var posicaol27 = palavraCerta.indexOf(l27)
    var posicaol28 = palavraCerta.indexOf(l28)
    var posicaol29 = palavraCerta.indexOf(l29)
    var posicaol30 = palavraCerta.indexOf(l30)


    //Condicionais para verificar se o posicionamento das letras está correto
    if(l26 != "" && l27 != "" && l28 != "" && l29 != "" && l30 != ""){
        if(posicaol26 == -1){
            document.getElementById("L26").style.backgroundColor = "red"
        }else if(posicaol26 == 0 || l26 == palavraCerta[0]){
            document.getElementById("L26").style.backgroundColor = "green"
        }else{
            document.getElementById("L26").style.backgroundColor = "#D3AD69"
        }

        if(posicaol27 == -1){
            document.getElementById("L27").style.backgroundColor = "red"
        }else if(posicaol27 == 1 || l27 == palavraCerta[1]){
            document.getElementById("L27").style.backgroundColor = "green"
        }else{
            document.getElementById("L27").style.backgroundColor = "#D3AD69"
        }

        if(posicaol28 == -1){
            document.getElementById("L28").style.backgroundColor = "red"
        }else if(posicaol28 == 2 || l28 == palavraCerta[2]){
            document.getElementById("L28").style.backgroundColor = "green"
        }else{
            document.getElementById("L28").style.backgroundColor = "#D3AD69"
        }

        if(posicaol29 == -1){
            document.getElementById("L29").style.backgroundColor = "red"
        }else if(posicaol29 == 3 || l29 == palavraCerta[3]){
            document.getElementById("L29").style.backgroundColor = "green"
        }else{
            document.getElementById("L29").style.backgroundColor = "#D3AD69"
        }

        if(posicaol30 == -1){
            document.getElementById("L30").style.backgroundColor = "red"
        }else if(posicaol30 == 4 || l30 == palavraCerta[4]){
            document.getElementById("L30").style.backgroundColor = "green"
        }else{
            document.getElementById("L30").style.backgroundColor = "#D3AD69"
        }

        document.getElementById("L26").disabled = true
        document.getElementById("L27").disabled = true
        document.getElementById("L28").disabled = true
        document.getElementById("L29").disabled = true
        document.getElementById("L30").disabled = true

        document.getElementById("bttn5").style.display = "none"
        document.getElementById("bttn6").style.display = "inline"
    }else{
        alert("Preencha todos os campos")
    }    
    setTimeout(() => {if((posicaol26 == 0 || l26 == palavraCerta[0]) && (posicaol27 == 1 || l27 == palavraCerta[1]) && (posicaol28 == 2 || l28 == palavraCerta[2]) 
        && (posicaol29 == 3 || l29 == palavraCerta[3]) && (posicaol30 == 4 || l30 == palavraCerta[4]) ){
            document.getElementById("resultado").innerText = "Você acertou"
            document.getElementById("resultado").style.backgroundColor = "green"
        }}, 0)
}
