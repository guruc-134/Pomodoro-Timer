// this is the script file used for adding the scheduled goals

const plannerBtn= document.querySelector('#planner_btn')
const plannerDiv=document.querySelector('#planner')
const aimTextArea=document.querySelector('#aim_bar')
const dropDownDiv=document.querySelector('#session_displayer')
var ul_lst_dropdown=document.querySelector('ul-list-dropdown')
const taskCompletedBtn=document.querySelector('.task_completed_btn')
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
        // curListLenCount+=1;
        // dropDownDiv.innerHTML+=
        // `<div class='dropdown-div'>
        // <h4 class='dropdown-div-heading'>Session ${curListLenCount}</h4>
        // <ul class='ul-list-dropdown' id="session_displayer__list-${curListLenCount}"> </ul>
        // </div>`
    }
    )
}
// console.log(sessionDetails)

const displaySessionDetails= ()=>
{
    // console.log(sessionDetails)
    cursessionDisplayList=document.querySelector(`#session_displayer__list-${curListLenCount}`)
    for(let ind in sessionDetails)
    {
        let content =sessionDetails[ind]
        console.log(content)
        if(content.length>=1)
        {
            curlistEleCount+=1
            cursessionDisplayList.innerHTML+=
            `<li id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}">
                ${content}
            <button class='task_completed_btn'> <img class='task_completed_btn-img' src="https://img.icons8.com/plasticine/100/000000/task-completed.png"/></button>
            </li>`
        }
    }
}

const displayPlanner= ()=>
{
    plannerDiv.style.visibility='visible';

}

if(taskCompletedBtn)
{
    taskCompletedBtn.addEventListener('click',()=>
    {

    }
    );
}



// note to self
// planning to add a feature which when we click the checkbixes from the ul those elements get deleted from the sessiondetails list and the others get carry forwarded 
