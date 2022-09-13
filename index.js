let count = false
let arr = document.querySelectorAll('.b')
let body = document.body
let winstatus = false
let iscount = 0
let a, b, c
let isdark = false
let tcolor = "rgb(252, 128, 3)"
let p1 = "O"
let p2 = "X"
let isreset = true
let myTimeout
var x = window.matchMedia("(max-height: 700px)")

window.onload=setInterval(function(){document.querySelector('.container').style.display=""},100)
document.querySelector('.container').style.display="none"

/*Sound Variable*/
const clickSound = new Audio('./Sounds/Bubble.mp3')
const playerSound = new Audio('./Sounds/Mouse_Click.mp3')
playerSound.currentTime = 0.5
const gameSound = new Audio('./Sounds/Game_music.mp3')
gameSound.play()
gameSound.loop = true
const gameWin = new Audio('./Sounds/Win.mp3')
gameWin.volume = 0.2
const gameDraw = new Audio('./Sounds/Draw-2.mp3')
gameDraw.playbackRate = 1.2


gameSound.muted = true;
clickSound.muted=true;
playerSound.muted=true;
gameWin.muted=true;
gameDraw.muted=true;


document.querySelector('.info').style.top = "20%"
document.querySelector('.info').style.left = "50%"
document.querySelector('.info').style.transform = "translate(-51%,-0%)"
document.querySelector('.info').style.borderRadius = "10px"
document.querySelector('.indicator').innerHTML = "Click Player 1 tab to choose symbol <br> Click any box to Start"


myFunction(x)
x.addListener(myFunction)

document.querySelector('.info').style.background = "rgb(235, 70, 52)"


document.querySelector('.playerdata1').style.background = tcolor


const checkO = () => {
    if (arr[0].innerText == "O" && arr[4].innerText == "O" && arr[8].innerText == "O") {
        a = 0
        b = 4
        c = 8
        return true
    }
    else if (arr[2].innerText == "O" && arr[4].innerText == "O" && arr[6].innerText == "O") {
        a = 2
        b = 4
        c = 6
        return true
    }
    else if (arr[0].innerText == "O" && arr[3].innerText == "O" && arr[6].innerText == "O") {
        a = 0
        b = 3
        c = 6
        return true
    }
    else if (arr[1].innerText == "O" && arr[4].innerText == "O" && arr[7].innerText == "O") {
        a = 1
        b = 4
        c = 7
        return true
    }
    else if (arr[2].innerText == "O" && arr[5].innerText == "O" && arr[8].innerText == "O") {
        a = 2
        b = 5
        c = 8
        return true
    }
    else if (arr[0].innerText == "O" && arr[1].innerText == "O" && arr[2].innerText == "O") {
        a = 0
        b = 1
        c = 2
        return true
    }
    else if (arr[3].innerText == "O" && arr[4].innerText == "O" && arr[5].innerText == "O") {
        a = 3
        b = 4
        c = 5
        return true
    }
    else if (arr[6].innerText == "O" && arr[7].innerText == "O" && arr[8].innerText == "O") {
        a = 6
        b = 7
        c = 8
        return true
    }
    return false
}

const checkX = () => {
    if (arr[0].innerText == "X" && arr[4].innerText == "X" && arr[8].innerText == "X") {
        a = 0
        b = 4
        c = 8
        return true
    }
    else if (arr[2].innerText == "X" && arr[4].innerText == "X" && arr[6].innerText == "X") {
        a = 2
        b = 4
        c = 6
        return true
    }
    else if (arr[0].innerText == "X" && arr[3].innerText == "X" && arr[6].innerText == "X") {
        a = 0
        b = 3
        c = 6
        return true
    }
    else if (arr[1].innerText == "X" && arr[4].innerText == "X" && arr[7].innerText == "X") {
        a = 1
        b = 4
        c = 7
        return true
    }
    else if (arr[2].innerText == "X" && arr[5].innerText == "X" && arr[8].innerText == "X") {
        a = 2
        b = 5
        c = 8
        return true
    }
    else if (arr[0].innerText == "X" && arr[1].innerText == "X" && arr[2].innerText == "X") {
        a = 0
        b = 1
        c = 2
        return true
    }
    else if (arr[3].innerText == "X" && arr[4].innerText == "X" && arr[5].innerText == "X") {
        a = 3
        b = 4
        c = 5
        return true
    }
    else if (arr[6].innerText == "X" && arr[7].innerText == "X" && arr[8].innerText == "X") {
        a = 6
        b = 7
        c = 8
        return true
    }
    return false
}

const iswin = () => {
    if (checkO()) {
        winstatus = true
        return true
    }
    else if (checkX()) {
        winstatus = true
        return true

    }
    return false
}

const pd1 = document.querySelector('.playerdata1')
const pd2 = document.querySelector('.playerdata2')

pd1.addEventListener("click", () => {


    if (isreset && p1 == "O") {
        console.log("clicked element")
        pd1.innerHTML = '<h3 class="player1">P<br>L<br>A<br>Y<br>E<br>R<br>1<br>-------<br>X</h3>'
        pd2.innerHTML = '<h3 class="player1">P<br>L<br>A<br>Y<br>E<br>R<br>2<br>-------<br>O</h3>'
        p1 = "X"
        p2 = "O"
        playerSound.play()
        playerSound.playbackRate = 1.5
        playerSound.currentTime = 0.5
    }
    else if (isreset) {
        console.log("clicked element")
        pd2.innerHTML = '<h3 class="player1">P<br>L<br>A<br>Y<br>E<br>R<br>2<br>-------<br>X</h3>'
        pd1.innerHTML = '<h3 class="player1">P<br>L<br>A<br>Y<br>E<br>R<br>1<br>-------<br>O</h3>'
        p1 = "O"
        p2 = "X"
        playerSound.play()
        playerSound.playbackRate = 1.5
        playerSound.currentTime = 0.5
    }
});


for (let i = 0; i < arr.length; i++) {


    arr[i].addEventListener("click", (event) => {


        document.querySelector('.info').style.top = ""
        document.querySelector('.info').style.left = ""
        document.querySelector('.info').style.transform = ""
        document.querySelector('.info').style.borderRadius = ""
        document.querySelector('.indicator').innerHTML = "Turn<br>Indicator"
        document.querySelector('.info').style.fontSize = ""
        document.querySelector('.info').style.background = tcolor
        isreset = false
        console.log(isreset)
        if (count == false && winstatus == false && arr[i].innerText == "") {

            audioReset(clickSound)
            clickSound.play()
            arr[i].innerText = p1
            count = true
            iscount++
            console.log(iscount)
            console.log(iswin() + "hi0")
            document.querySelector('.playerdata1').style.background = ""
            document.querySelector('.playerdata2').style.background = tcolor
            document.querySelector('.turn').innerText = "Turn: Player 2"
            if (iswin()) {
                audioReset(gameSound)
                audioReset(clickSound)
                gameWin.play()
                console.log("player1")
                document.getElementById('res').innerText = "Winner"
                document.getElementById('playername').innerText = "Player 1"
                /*document.querySelector('.result').style.background="#2ebf91"
                document.querySelector('.result').style.border="5px solid black"*/
                document.querySelector('.result').style.transform = "translate(0%,0%)"
                document.querySelector('.playerdata1').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata2').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata').style.transform = "translate(0%,50%)"
                arr[a].style.background = "rgb(24, 222, 77)"
                arr[b].style.background = "rgb(24, 222, 77)"
                arr[c].style.background = "rgb(24, 222, 77)"
                document.querySelector('.rst').innerText = "Play Again"
            }
            else if (iscount == 9) {
                audioReset(gameSound)
                audioReset(clickSound)
                gameDraw.play()
                document.getElementById('res').innerText = "Draw"
                /* document.querySelector('.result').style.background="#2ebf91"
                 document.querySelector('.result').style.border="5px solid black"*/
                document.querySelector('.result').style.transform = "translate(0%,0%)"
                document.querySelector('.playerdata1').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata2').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata').style.transform = "translate(0%,50%)"
                document.querySelector('.result').style.background = "rgb(227, 27, 54)"
                document.querySelector('.rst').innerText = "Play Again"
            }
        }
        else if (count == true && winstatus == false && arr[i].innerText == "") {
            audioReset(clickSound)
            clickSound.play()
            arr[i].innerText = p2
            count = false
            iscount++
            console.log(iscount)
            console.log(iswin() + "hi1")
            document.querySelector('.playerdata1').style.background = tcolor
            document.querySelector('.playerdata2').style.background = ""
            document.querySelector('.turn').innerText = "Turn: Player 1"
            if (iswin()) {
                gameWin.play()
                audioReset(clickSound)
                audioReset(gameSound)
                console.log("player2")
                document.getElementById('res').innerText = "Winner"
                document.getElementById('playername').innerText = "Player 2"
                /* document.querySelector('.result').style.background="#2ebf91"
                 document.querySelector('.result').style.border="5px solid black"*/
                document.querySelector('.result').style.transform = "translate(0%,0%)"
                document.querySelector('.playerdata1').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata2').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata').style.transform = "translate(0%,50%)"
                arr[a].style.background = "rgb(24, 222, 77)"
                arr[b].style.background = "rgb(24, 222, 77)"
                arr[c].style.background = "rgb(24, 222, 77)"
                document.querySelector('.rst').innerText = "Play Again"
            }
            else if (iscount == 9) {
                audioReset(gameSound)
                audioReset(clickSound)
                gameDraw.play()
                document.getElementById('res').innerText = "Draw"
                /*document.querySelector('.result').style.background="#2ebf91"
                document.querySelector('.result').style.border="5px solid black"*/
                document.querySelector('.result').style.transform = "translate(0%,0%)"
                document.querySelector('.playerdata1').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata2').style.transform = "translate(0%,20%)"
                document.querySelector('.playerdata').style.transform = "translate(0%,50%)"
                document.querySelector('.result').style.background = "rgb(227, 27, 54)"
                document.querySelector('.rst').innerText = "Play Again"

            }
        }

    })
}

const toggle = () => {
    playerSound.play()
    playerSound.currentTime = 0.5
    let darkicon = document.getElementById('icon')
    console.log(darkicon.src)
    let darktheme = document.querySelector('.link')
    console.log(darktheme.getAttribute('href'))
    if (darktheme.getAttribute('href') === "style.css") {
        darktheme.href = "styledark.css"
        darkicon.src = "https://img.icons8.com/external-justicon-lineal-color-justicon/50/000000/external-moon-weather-justicon-lineal-color-justicon-1.png"
        tcolor = "rgb(252, 3, 123)"
        if (document.querySelector('.playerdata2').style.background == "rgb(252, 128, 3)") {
            document.querySelector('.playerdata2').style.background = tcolor
        }
        else {
            document.querySelector('.playerdata1').style.background = tcolor
        }
        if (isreset) {
            document.querySelector('.info').style.background = "rgb(66, 209, 245)"
        }
        else {
            document.querySelector('.info').style.background = tcolor
        }
        myTimeout = setTimeout(function () { document.querySelector('.container').style.display = ""; document.body.style.background = ""; document.querySelector('#sun').style.display = "" ;document.querySelector('#sound').style.display = ""}, 100);
        document.querySelector('.container').style.display = "none"
        document.body.style.background = "black"
        document.querySelector('#sun').style.display = "none"
        document.querySelector('#sound').style.display = "none"
        isdark = true

    }
    else {
        darktheme.href = "style.css"
        darkicon.src = "https://img.icons8.com/external-tulpahn-outline-color-tulpahn/50/000000/external-sun-space-tulpahn-outline-color-tulpahn.png"
        tcolor = "rgb(252, 128, 3)"
        if (document.querySelector('.playerdata2').style.background == "rgb(252, 3, 123)") {
            document.querySelector('.playerdata2').style.background = tcolor
        }
        else {
            document.querySelector('.playerdata1').style.background = tcolor
        }
        if (isreset) {
            document.querySelector('.info').style.background = "rgb(235, 70, 52)"
        }
        else {
            document.querySelector('.info').style.background = tcolor
        }
        myTimeout = setTimeout(function () { document.querySelector('.container').style.display = ""; document.body.style.background = ""; document.querySelector('#sun').style.display = "";document.querySelector('#sound').style.display = "" }, 100);
        document.querySelector('.container').style.display = "none"
        document.body.style.background = "sky"
        document.querySelector('#sun').style.display = "none"
        document.querySelector('#sound').style.display = "none"
        isdark = false
    }
}

const reset = () => {
    playerSound.play()
    playerSound.currentTime = 0.5
    for (let i = 0; i < arr.length; i++) {
        arr[i].innerText = ""
        arr[i].style.background = ""
    }
    gameSound.play()
    gameSound.loop = true
    if (iscount == 9) {
        gameDraw.pause();
        gameDraw.currentTime = 0
    }
    if (winstatus == true) {
        gameWin.pause();
        gameWin.currentTime = 0
    }
    winstatus = false
    iscount = 0
    count = false
    document.querySelector('.result').style.transform = "translate(0%,100%)"
    document.getElementById('res').innerText = ""
    document.getElementById('playername').innerText = ""
    document.querySelector('.playerdata1').style.transform = ""
    document.querySelector('.playerdata2').style.transform = ""
    document.querySelector('.playerdata2').style.background = ""
    document.querySelector('.playerdata1').style.background = tcolor
    document.querySelector('.playerdata').style.transform = ""
    document.querySelector('.result').style.background = ""
    document.querySelector('.rst').innerText = "Reset Board"
    isreset = true
    console.log(isreset)
    pd2.innerHTML = '<h3 class="player1">P<br>L<br>A<br>Y<br>E<br>R<br>2<br>-------<br>X</h3>'
    pd1.innerHTML = '<h3 class="player1">P<br>L<br>A<br>Y<br>E<br>R<br>1<br>-------<br>O</h3>'
    p1 = "O"
    p2 = "X"
    document.querySelector('.info').style.top = "20%"
    document.querySelector('.info').style.left = "50%"
    document.querySelector('.info').style.transform = "translate(-51%,-0%)"
    document.querySelector('.info').style.borderRadius = "10px"
    document.querySelector('.indicator').innerHTML = "Click Player 1 tab to choose symbol <br> Click any box to Start"
    myFunction(x)
    document.querySelector('.info').style.width = "fit-content"
    if (!isdark) {
        document.querySelector('.info').style.background = "rgb(235, 70, 52)"
    }
    else {
        document.querySelector('.info').style.background = "rgb(66, 209, 245)"
    }
}

function myFunction(x) {
    if (x.matches) {
        document.querySelector('.info').style.fontSize = "25px"
        document.querySelector('.result').style.fontSize = "25px"
        document.querySelector('.result').style.height = "120px"
        document.querySelector('.tictactoe').style.transform = "translate(0%,3%)"
        document.querySelector('.result').style.transform = "translate(0%,110%)"

    }
    else {
        document.querySelector('.info').style.fontSize = "30px"
        document.querySelector('.result').style.fontSize = ""
        document.querySelector('.result').style.height = ""
        document.querySelector('.tictactoe').style.transform = ""
        document.querySelector('.result').style.transform = ""
    }
}

function audioReset(a) {
    if (a.paused) {
        a.play();
    } else {
        a.pause();
        a.currentTime = 0
    }
}

function mute(){
    if(gameSound.muted){
        gameSound.muted = false;
        gameSound.play()
        gameSound.loop = true
        clickSound.muted=false;
        playerSound.muted=false;
        gameWin.muted=false;
        gameDraw.muted=false;
        console.log(gameSound.muted)
        document.getElementById('music').src="https://img.icons8.com/external-others-iconmarket/64/000000/external-sound-user-experience-others-iconmarket-3.png"
    }
    else{
        gameSound.muted = true;
        clickSound.muted=true;
        playerSound.muted=true;
        gameWin.muted=true;
        gameDraw.muted=true;
        document.getElementById('music').src="https://img.icons8.com/external-others-iconmarket/64/000000/external-mute-user-experience-others-iconmarket-3.png"
    }
}

