import"./assets/modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]');e.querySelector('button[type="submit"]');function m(){const r={email:t.value.trim(),message:a.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(r))}const o=JSON.parse(localStorage.getItem("feedback-form-state"));o&&(t.value=o.email,a.value=o.message),e.addEventListener("input",function(){m()}),e.addEventListener("submit",function(r){if(r.preventDefault(),!t.value.trim()||!a.value.trim()){alert("Будь ласка, заповніть всі обов'язкові поля.");return}localStorage.removeItem("feedback-form-state"),t.value="",a.value="";const n={email:t.value.trim(),message:a.value.trim()};console.log("Submitted form data:",n)})});
//# sourceMappingURL=commonHelpers2.js.map
