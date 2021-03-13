// this is the script file used for adding the scheduled goals

const plannerBtn= document.querySelector('#planner_btn')
const plannerDiv=document.querySelector('#planner')
const aimTextArea=document.querySelector('#aim_bar')
const sessionDisplay=document.querySelector('.session_displayer__list')
var sessionDetails=[]
if(plannerBtn)
{
    plannerBtn.addEventListener("click" ,()=>
    {
        sessionDetails.push(...aimTextArea.value.split('-'))
        aimTextArea.value=""
        plannerDiv.style.visibility='hidden';
    }
    )
}
// console.log(sessionDetails)

const displaySessionDetails= ()=>
{
    console.log(sessionDetails)
    for(let ind in sessionDetails)
    {
        let content =sessionDetails[ind]
        console.log(content)
        if(content.length>=1)
        {
            sessionDisplay.innerHTML+=
            `<li class="session_displayer__list_ele">
                ${content}
            <input  class='checkbox' type="checkbox" class=''>
            </li>`
        }
    }
    
}
// if(inbreak)
// {
//     displaySessionDetails()
// }
// console.log(inbreak)
