//Challenge 1
function clickMe (){
    var year = prompt('What year were you born... Good friend?');
    let days = (2020 - year) * 365;
    var h1 = document.createElement('h1');
    var text = document.createTextNode('You are about ' + days + " days old.");
    h1.appendChild(text);
    h1.setAttribute('id', 'ageInDays');
    document.getElementById('result-div').appendChild(h1);
}

function reset (){
    document.getElementById('ageInDays').remove();
}


//Challenge 2: Picture Generator
function addPicture (){
    var image = document.createElement('img');
    image.src = 'static/img/bakarefaruq.jpg';
    document.getElementById('result-div-2').appendChild(image);
}


//Challenge 3: Change the color of all Buttons
//Hold initial colors in an array
let allBtnColorBackUp = [];
let allBtn = document.getElementsByTagName('button');
for (let i = 0; i < allBtn.length; i++) {
    allBtnColorBackUp.push(allBtn[i].style.backgroundColor);    
}

function chgBtnColor (clr){
    console.log(clr);
    if (clr == 'red') {
        changeColorRed();
    } else if(clr == 'blue') {
        changeColorBlue();
    } else if(clr === 'green') {
        changeColorGreen();
    } else if(clr === 'random') {
        changeColorRandom();
    } else {
        changeColorReset();
    }
}

function changeColorRed(){
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].style.backgroundColor = "red";
        allBtn[i].style.color = 'white';  
    }
}

function changeColorBlue(){
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].style.backgroundColor = "royalblue";
        allBtn[i].style.color = 'white';    
    }
}

function changeColorGreen(){
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].style.backgroundColor = "green";
        allBtn[i].style.color = 'white';  
    }
}

function changeColorRandom(){
    let colorChoices = ["red", "royalblue", "green", "yellow"];
    for (let i = 0; i < allBtn.length; i++) {
        let colorPosition = Math.floor(Math.random() * 4);
        allBtn[i].style.backgroundColor = colorChoices[colorPosition];
        if (allBtn[i].style.backgroundColor === 'yellow') {
            allBtn[i].style.color = 'black';
        }
    }
}

function changeColorReset(){
    for (let i = 0; i < allBtn.length; i++) {
        allBtn[i].style.backgroundColor = allBtnColorBackUp[i];  
        if (allBtn[i].style.backgroundColor === 'yellow') {
            allBtn[i].style.color = 'black';
        }  
    }
}