let resultDiv = document.querySelector("#result");
let Boxes = document.querySelectorAll(".box");
console.log(Boxes);//getting output in list
let messageBox = document.querySelector("#message");
let playAgainBtn = document.getElementById("button");
let WinningOutcomes = [
    [1,2,3],
    [4,5,6], //vertical,horizontl,diagonal
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];
for (eachBox of Boxes){
    eachBox.addEventListener("click",PlayerChances);
    // console.log(eachBox);
}
let hasAnyPlayerWonOrNot = false;
let xClicks = [];
let oClicks = [];
let clickedCount=0;
function PlayerChances(event){
    // console.log(event)
    let Id = Number(event.target.id);//number will convert id from string to number
    clickedCount+=1;
    let EachBoxThatNeedsAppendment = Boxes[Id-1];//because index starts from zero.(boxes output will be in form of list because we used query selector all)
    let CreatedPTag=document.createElement("p");
    CreatedPTag.style.color="#FAB201";
    EachBoxThatNeedsAppendment.appendChild(CreatedPTag);//it should follow the same styling for the upcoming p tag also
    EachBoxThatNeedsAppendment.style.pointerEvents="none";

    if (clickedCount%2==0){
        CreatedPTag.innerText="X";
        xClicks.push(Id);
        Result("X",xClicks);
    }
    else{
        CreatedPTag.innerText="O";
        oClicks.push(Id);
        Result("O",oClicks);
    }

    if (clickedCount==9 && hasAnyPlayerWonOrNot==false){
        resultDiv.style.visibility="visible";
        messageBox.innerText="Match is draw";
    }
}

function Result(PlayerPlaying,PlayersArray)
{
    for (let i=0;i<8;i++){//8 winningoutcome(i.e 8 list)
        let count=0;
        for(let j=0;j<3;j++){//length of each list in winning outcome is 3
            if(PlayersArray.includes(WinningOutcomes[i][j])===true){
                count+=1;
            }
        }
    
    

        if (count==3){         hasAnyPlayerWonOrNot=true;
         resultDiv.style.visibility="visible";
         messageBox.innerText=PlayerPlaying+"Has Won The Match"
    }
}
}

playAgainBtn.addEventListener("click",function(){
    window.location.reload();
})