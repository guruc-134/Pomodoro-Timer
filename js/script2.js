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

// font changing
const fontCursive=document.querySelector('.cursive')
const fontNormal=document.querySelector('.normal')
const fontFancy=document.querySelector('.fancy')
const body=document.body


if(true)
{
    fontCursive.addEventListener('click', ()=>
    {
        body.style.fontFamily = " 'Pacifico', cursive ";

    });

    fontNormal.addEventListener('click', ()=>
    {
        body.style.fontFamily = " 'Akaya Telivigala', cursive " ;


    });

    fontFancy.addEventListener('click', ()=>
    {
        body.style.fontFamily =" 'Ranchers', cursive " ;

    });
}



// theme change
const theme1=document.querySelector('theme-1')
const theme1_colorPrimary="##4ecca3";
const theme1_colorSecondary="#393e46";
const theme1_back_1="#eeeeee";
const theme1_back_2="#232931";

const theme2=document.querySelector('theme-2')
const theme2_colorPrimary="#e48257";
const theme2_colorSecondary="#3a6351";
const theme2_back_1="#f2edd7";
const theme2_back_2="#393232";

const

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
