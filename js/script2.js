// this is the script file used for adding the scheduled goals

const plannerBtn= document.querySelector('#planner_btn')
const plannerDiv=document.querySelector('#planner')
const aimTextArea=document.querySelector('#aim_bar')
const dropDownDiv=document.querySelector('.session_displayer')
var cursessionDisplayList;
var sessionDetails=[]
var curListLenCount=0;
var curlistEleCount=0;

if(plannerBtn)
{
    plannerBtn.addEventListener("click" ,()=>
    {

        curlistEleCount=0;
        sessionDetails.push(...aimTextArea.value.split('-'))
        aimTextArea.value=""
        plannerDiv.style.visibility='hidden';
        curListLenCount+=1;
        dropDownDiv.innerHTML+=
        `<ul class="session_displayer__list-${curListLenCount}"> </ul>`
    }
    )
}
// console.log(sessionDetails)

const displaySessionDetails= ()=>
{
    // console.log(sessionDetails)
    cursessionDisplayList=document.querySelector(`.session_displayer__list-${curListLenCount}`)
    for(let ind in sessionDetails)
    {
        curlistEleCount+=1
        let content =sessionDetails[ind]
        console.log(content)
        if(content.length>=1)
        {
            cursessionDisplayList.innerHTML+=
            `<li class="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}">
                ${content}
            <input  class='checkbox' type="checkbox" class=''>
            </li>`
        }
    }
}

const displayPlanner= ()=>
{
    plannerDiv.style.visibility='visible';

}




// note to self
// planning to add a feature which when we click the checkbixes from the ul those elements get deleted from the sessiondetails list and the others get carry forwarded 
