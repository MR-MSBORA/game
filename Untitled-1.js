let boxes=document.querySelectorAll(".box");
let restart=document.querySelector(".restart");
let newGame=document.querySelector(".start");
let msg=document.querySelector(".winner");
let msgBox=document.querySelector(".head");
let turn=true;
let count=0;

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
  const disabl=()=>
  {
    for(let box of boxes)
      {
        box.disabled=true;
      }
  };
  const enable=()=>
    {
      for(let box of boxes)
        {
          box.disabled=false;
          box.innerText="";
        }
    };
  const checkWinner = () => {
    for (let pattern of winpattern) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        disabl();
        return true;
        }else if(count==9 && pos1Val !== pos2Val && pos2Val !== pos3Val){
          draw();
          disabl();
          return true;
        }
      }
    }
  };
   
  const showWinner = (winner) => {
    msg.innerText = `Congratulation! Winner is ${winner}`;
    msgBox.classList.remove("hide");
};

const draw = () => {
  msg.innerText = `DRAW`;
  msgBox.classList.remove("hide");
};
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn)
            {
                box.innerText="O";
                turn=false;
            }
            else{
                box.innerText="X";
                turn=true;
            }
            box.disabled=true;
            ++count;
            let whoWin = checkWinner();
    });
 
  });
 const resetGame=()=>{
   turn=true;
   enable();
   msgBox.classList.add("hide");
 }
 newGame.addEventListener("click",resetGame);
 restart.addEventListener("click",resetGame);