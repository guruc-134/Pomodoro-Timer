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
const font1=document.querySelector('#font-1')
const font2=document.querySelector('#font-2')
const font3=document.querySelector('#font-3')
const body=document.body




if(true)
{
    font1.addEventListener('click', ()=>
    {
        body.style.fontFamily ="'Bitter', serif";
        body.style.letterSpacing="0px";

    });

    font2.addEventListener('click', ()=>
    {
        body.style.fontFamily = " 'Cookie', cursive " ;
        body.style.letterSpacing="3px";
    });

    font3.addEventListener('click', ()=>
    {
        body.style.fontFamily =" 'Lato', sans-serif " ;
        body.style.letterSpacing="0px";

    });
}



// theme change
const theme1=document.querySelector('#theme-1')
const theme1Style=
{
    colorPrimary:"##4ecca3",
    colorSecondary:"#393e46",
    back_1:"#eeeeee",
    back_2:"#232931",
}
const theme2=document.querySelector('#theme-2')
const theme2Style=
{
    colorPrimary:"#e48257",
    colorSecondary:"#3a6351",
    back_1:"#f2edd7",
    back_2:"#393232",
};

const themechanger=(theme)=>
{
    // console.log('clicked theme')
    let secondary=theme.colorSecondary;
    let primary=theme.colorPrimary;
    let back_1=theme.back_1;
    let back_2=theme.back_2;

    // changing secondary
    document.querySelector('body').style.color=secondary;
    document.querySelector('.navbar').style.background=secondary;
    document.querySelector('.icons-large').style.color=secondary;
    document.querySelector('.icons-larger').style.color=secondary;
    document.querySelector('.page-header').style.background=secondary;
    document.querySelector('#timer-box').style.borderColor=secondary;
    document.querySelector('#planner_btn').style.borderColor=secondary;
    document.querySelector('#aim_bar').style.background=secondary;
    document.querySelector('.dropbtn').style.backgroundColor=secondary;

    // changing colorPrimary

    document.querySelector('.customize-content').style.borderColor=primary;
    document.querySelector('.icons').style.color=primary;
    document.querySelector('.page-header-txt').style.color=primary;
    document.querySelector('#timer').style.borderColor=primary;
    document.querySelector('#planner_btn').style.background=primary;
    document.querySelector('#aim_bar').style.borderColor=primary;
    // document.querySelector('.dropdown-div-heading').style.background=primary;
    // document.querySelector('.dropdown-div li').style.borderColor=primary;
    // document.querySelector('checkbox').style.borderColor=primary;
    // document.querySelector('.dropdown:hover .dropbtn').style.color=primary;

    // changing back_1
    document.querySelector('body').style.color=back_1;
    document.querySelector('.icons').style.backgroundColor=back_1;
    document.querySelector('.icons-large').style.backgroundColor=back_1;
    document.querySelector('.icons-larger').style.backgroundColor=back_1;
    document.querySelector('#planner_btn').style.color=back_1;
    document.querySelector('#aim_bar').style.color=back_1;
    // document.querySelector('.dropdown-div li').style.color=back_1;
    // document.querySelector('.dropdown-content button').style.color=back_1;
    // document.querySelector('.dropdown-content button:hover').style.color=back_1;
};

if(theme1)
theme1.addEventListener('click',()=>themechanger(theme1Style))
if(theme2)
theme2.addEventListener('click',()=>themechanger(theme2Style))

if(plannerBtn)
{
    plannerBtn.addEventListener("click" ,()=>
    {
        curlistEleCount=0;
        sessionDetails.push(...aimTextArea.value.split('-'))
        aimTextArea.value=""
    }
    );
;}

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
                
            </li>`
        }
    }
    curlistEleCount+=1
    cursessionDisplayList.innerHTML+=
    `<li class='session_duriation' id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}">
                <span id="session_displayer__list-${curListLenCount}_ele-${curlistEleCount}-txt" > Session Duriation: ${sessionLen.innerHTML} </span>  
            </li>`
    // sessionDetails=[]
}
const displayPlanner= ()=>
{
    plannerDiv.style.visibility='visible';

}
