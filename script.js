function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >=0 && hora <12){
        msg.innerHTML += ' Bom dia!'
        img.src="./manha.jpg"
        document.body.style.background = 'rgb(238, 228, 143)'
    }
    else if(hora >=12 && hora <18){
        msg.innerHTML += ' Boa tarde!'
        img.src="./tarde.jpg"
        document.body.style.background = 'rgb(173, 103, 24)'
    }
    else {
        msg.innerHTML += ' Boa noite!'
        img.src="./noite.jpg"
        document.body.style.background = 'rgb(6, 29, 53)'
    }
}