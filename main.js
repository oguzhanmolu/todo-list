(()=>{"use strict";const e=document.getElementById("modal"),t=document.getElementById("form"),n=document.getElementById("add-new-task-group"),d=document.querySelector(".submit-button");n.addEventListener("click",(()=>{e.style.display="block"})),d.addEventListener("click",(t=>{t.preventDefault(),e.style.display="none"})),n.addEventListener("click",(()=>{t.reset()}))})();