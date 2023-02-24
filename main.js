(()=>{"use strict";class t{constructor(t,e,a){this.title=t,this.description=e,this.deadline=a}static createTaskObject(){const e=document.getElementById("input-title").value,a=document.getElementById("input-description").value,s=document.getElementById("input-date").value;return new t(e,a,s)}static getFullDate(){const t=new Date,e=(new Date).getDate();return`${t.getFullYear()}-0${t.getMonth()+1}-${e<10?"0"+e:e}`}}let e=[];class a{constructor(){this.tasks=[]}static storeTaskObject(t){e.push(t),this.tasks=e,localStorage.setItem("taskArray",JSON.stringify(this.tasks))}static getTaskArray(){return JSON.parse(localStorage.getItem("taskArray"))}}class s{static createCardInnerHTML(t,e,a){const s=document.getElementById("task-display-area"),n=document.createElement("div");n.innerHTML=`\n    <div id="card">\n      <i class="card-icon fa-sharp fa-solid fa-check-double"></i>\n      <span class="card-item card-title">Title: ${t}</span>\n      <span class="card-item card-description">Description: ${e}</span>\n      <span class="card-item card-deadline">Deadline:\n       ${a.split("-").reverse().join("/")}</span>\n      </div>`,s.appendChild(n)}static createAllTaskCards(){const t=document.getElementById("main-title"),e=document.getElementById("task-display-area");document.getElementById("all-tasks").addEventListener("click",(()=>{e.textContent="",t.textContent="All Tasks",a.tasks&&a.tasks.forEach((t=>this.createCardInnerHTML(t.title,t.description,t.deadline)))}))}static createTodayTaskCards(){const e=document.getElementById("main-title"),s=document.getElementById("task-display-area");document.getElementById("today-tasks").addEventListener("click",(()=>{s.textContent="",e.textContent="Today's Tasks",a.tasks&&a.tasks.forEach((e=>{e.deadline===t.getFullDate()&&this.createCardInnerHTML(e.title,e.description,e.deadline)}))}))}static createUpcomingTaskCards(){const e=document.getElementById("main-title"),s=document.getElementById("task-display-area");document.getElementById("upcoming-tasks").addEventListener("click",(()=>{s.textContent="",e.textContent="Upcoming Tasks",a.tasks&&a.tasks.forEach((e=>{e.deadline.split("-")[1]===t.getFullDate().split("-")[1]&&e.deadline.split("-")[2]-t.getFullDate().split("-")[2]<=7&&this.createCardInnerHTML(e.title,e.description,e.deadline)}))}))}}class n{static toggleModal(){const t=document.getElementById("modal"),e=document.getElementById("add-new-task-group"),a=document.getElementById("form"),n=document.getElementById("header");e.addEventListener("click",(()=>{t.style.display="block",n.style.filter="blur(1px)"})),a.addEventListener("submit",(e=>{e.preventDefault(),t.style.display="none",n.style.filter="blur(0px)",s.createAllTaskCards()}))}static resetModal(){const t=document.getElementById("form");document.getElementById("add-new-task-group").addEventListener("click",(()=>{t.reset()}))}static createTaskObject(){document.getElementById("form").addEventListener("submit",(()=>a.storeTaskObject(t.createTaskObject())))}static createToDoCard(){s.createAllTaskCards(),s.createTodayTaskCards(),s.createUpcomingTaskCards()}}n.toggleModal(),n.resetModal(),n.createTaskObject(),n.createToDoCard()})();