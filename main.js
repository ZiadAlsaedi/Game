var indexForPic = 0
var time
var score = 0
var allScore = 0

function startTheGame(restart) {

    if (!restart) {
        
    score = 0
    document.getElementById('scoreDisplay').innerHTML = `Score: ${score}/5`;

    document.getElementById("nextLevel").style.display="flex"
    document.getElementById("before-start").style.display="none";
    document.getElementById("time-finish").style.display="none";

    showPic(indexForPic);
    timer()
    } else {
        document.getElementById("game-over").style.display="none";
        document.getElementById("before-start").style.display="flex";
        indexForPic = 0
        allScore = 0

    }

}

const arr = [
    {
        id: 1,
        image: "./img1.png",
        image2: "./img1,1.png",
        differnce: {
            dif1: 'dif1',
            dif2: 'dif2',
            dif3: 'dif3',
            dif4: 'dif4',
            dif5: 'dif5',



        }
    },
    {
        id: 2,
        image: "./img2.png",
        image2: "./img2,2.png",
        differnce: {
            dif1: 'dif6',
            dif2: 'dif7',
            dif3: 'dif8',
            dif4: 'dif9',
            dif5: 'dif10',
        }
    },    {
        id: 3,
        image: "./img3.png",
        image2: "./img3,3.png",
        differnce: {
            dif1: 'dif11',
            dif2: 'dif12',
            dif3: 'dif13',
            dif4: 'dif14',
            dif5: 'dif15',
        }
    },    {
        id: 4,
        image: "./img4.png",
        image2: "./img4,4.png",
        differnce: {
            dif1: 'dif16',
            dif2: 'dif17',
            dif3: 'dif18',
            dif4: 'dif19',
            dif5: 'dif20',
        }
    },    {
        id: 5,
        image: "./img5.png",
        image2: "./img5,5.png",
        differnce: {
            dif1: 'dif21',
            dif2: 'dif22',
            dif3: 'dif23',
            dif4: 'dif24',
            dif5: 'dif25',
        }
    },
    
   
];

function showPic(index) {
    if (index >= arr.length) {
        document.getElementById("all-score").innerHTML = `Total Score: ${allScore}/25`;
        document.getElementById("game-over").style.display = "block"
        document.getElementById("nextLevel").style.display="none"
        return;
    }
    var content = `
    <div class="col" id="img-cont">

    <div class="img-div">
    <img src="${arr[index].image2}" class="img" />
    `

    for ( i in arr[index].differnce) {

        id = arr[index].differnce[i]

            content += `
            <div class="dif ${id}" onclick="correct('${id}')"></div>
            `;
    }

    content+=`
    </div>
    <div class="img-div">
    <img src="${arr[index].image}" class="img" />
    `;

    for ( i in arr[index].differnce) {

        id = arr[index].differnce[i]

            content += `
            <div class="dif ${id}" onclick="correct('${id}')"></div>
            `;
    }



    content += `
    </div>
    </div>
    <button type="button" id="next-btn" style="display: none;"  onclick="startTheGame()">Next Level</button>

`;


    document.getElementById("after-start").innerHTML = content;

    indexForPic++;
}



function correct(id) {
    score++; 
    allScore++; 


    if (score == 5) {
        document.getElementById("next-btn").style.display="block"
    }
    difs = document.getElementsByClassName(id)
    difs[0].style.border = "2px solid green";
    difs[1].style.border = "2px solid green";

    document.getElementById('scoreDisplay').innerHTML = `Score: ${score}/5`;
}



function timer(){
    clearInterval(time);

    var sec = 10;
    time = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='Time: 00:'+sec ;
        sec--;
        if (sec < 0) {
            clearInterval(time);
            document.getElementById("time-finish").style.display="block"
            document.getElementById("next-btn").style.display="block"
            
            imgDivs = document.getElementsByClassName("img-div")
            imgDivs[0].style.display="none"
            imgDivs[1].style.display="none"
            
            document.getElementById('scoreDisplay').style.display="block"

        }
    }, 1000);
}

