(()=>{"use strict";class e{constructor(e,t,a){this.title=e,this.description=t,this.deadline=a}static createTaskObject(){const t=document.getElementById("input-title").value,a=document.getElementById("input-description").value,s=document.getElementById("input-date").value;return new e(t,a,s)}static getFullDate(){const e=new Date,t=(new Date).getDate();return`${e.getFullYear()}-0${e.getMonth()+1}-${t<10?"0"+t:t}`}}let t=[];class a{constructor(){this.tasks=[]}static storeTaskObject(e){t.push(e),this.tasks=t,localStorage.setItem("taskArray",JSON.stringify(this.tasks))}static getTaskArray(){return JSON.parse(localStorage.getItem("taskArray"))}}class s{static createAllTaskCards(){const e=document.getElementById("main-title"),t=document.getElementById("task-display-area");document.getElementById("all-tasks").addEventListener("click",(()=>{t.textContent="",e.textContent="All Tasks",a.tasks&&a.tasks.forEach((e=>{const a=document.createElement("div");a.innerHTML=`\n        <div id="card">\n          <i class="card-icon fa-sharp fa-solid fa-check-double"></i>\n          <span class="card-item card-title">Title: ${e.title}</span>\n          <span class="card-item card-description">Description: ${e.description}</span>\n          <span class="card-item card-deadline">Deadline:\n           ${e.deadline.split("-").reverse().join("/")}</span>\n          </div>`,t.appendChild(a)}))}))}static createTodayTaskCards(){const t=document.getElementById("main-title"),s=document.getElementById("task-display-area");document.getElementById("today-tasks").addEventListener("click",(()=>{s.textContent="",t.textContent="Today's Tasks",a.tasks&&a.tasks.forEach((t=>{if(t.deadline===e.getFullDate()){const e=document.createElement("div");e.innerHTML=`\n          <div id="card">\n            <i class="card-icon fa-sharp fa-solid fa-check-double"></i>\n            <span class="card-item card-title">Title: ${t.title}</span>\n            <span class="card-item card-description">Description: ${t.description}</span>\n            </div>`,s.appendChild(e)}}))}))}static createUpcomingTaskCards(){const t=document.getElementById("main-title"),s=document.getElementById("task-display-area");document.getElementById("upcoming-tasks").addEventListener("click",(()=>{s.textContent="",t.textContent="Upcoming Tasks",a.tasks&&a.tasks.forEach((t=>{if(t.deadline.split("-")[1]===e.getFullDate().split("-")[1]&&t.deadline.split("-")[2]-e.getFullDate().split("-")[2]<=7){const e=document.createElement("div");e.innerHTML=`\n          <div id="card">\n            <i class="card-icon fa-sharp fa-solid fa-check-double"></i>\n            <span class="card-item card-title">Title: ${t.title}</span>\n            <span class="card-item card-description">Description: ${t.description}</span>\n            <span class="card-item card-deadline">Deadline:\n             ${t.deadline.split("-").reverse().join("/")}</span>\n            </div>`,s.appendChild(e)}}))}))}}class n{static toggleModal(){const e=document.getElementById("modal"),t=document.getElementById("add-new-task-group"),s=document.getElementById("form"),n=document.getElementById("header");t.addEventListener("click",(()=>{e.style.display="block",n.style.filter="blur(1px)"})),s.addEventListener("submit",(t=>{t.preventDefault(),e.style.display="none",n.style.filter="blur(0px)",console.log(a.getTaskArray())}))}static resetModal(){const e=document.getElementById("form");document.getElementById("add-new-task-group").addEventListener("click",(()=>{e.reset()}))}static createTaskObject(){document.getElementById("form").addEventListener("submit",(()=>a.storeTaskObject(e.createTaskObject())))}static createToDoCard(){s.createAllTaskCards(),s.createTodayTaskCards(),s.createUpcomingTaskCards()}}n.toggleModal(),n.resetModal(),n.createTaskObject(),n.createToDoCard()})();