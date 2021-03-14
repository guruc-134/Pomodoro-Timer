const plannerBtn= document.querySelector('#planner_btn')
const plannerDiv=document.querySelector('#planner')
const aimTextArea=document.querySelector('#aim_bar')
const dropDownDiv=document.querySelector('#session_displayer')
var ul_lst_dropdown=document.querySelector('ul-list-dropdown')
const reviewBtn=document.querySelector('review-btn')
var taskCompletedBtn;
var curSpanEle;
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
    }
    )
}

const displaySessionDetails= ()=>
{
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
                <span id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}-txt" > ${content} </span>
                    <img class='task_completed_btn-img' src="https://img.icons8.com/plasticine/100/000000/task-completed.png"/>
                </button>
            </li>`
        }
    }
    sessionDetails=[]
}
const displayPlanner= ()=>
{
    plannerDiv.style.visibility='visible';

}
