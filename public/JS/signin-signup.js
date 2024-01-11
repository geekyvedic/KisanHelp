const btns = document.querySelectorAll(".tab-btn");
const forms = document.querySelectorAll(".content");
btns.forEach(function(btn){
  btn.addEventListener("click",function(e){
    btns.forEach(function(btn){
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    forms.forEach(function(form){
      form.classList.remove("active");
      if(form.dataset.id===e.currentTarget.dataset.id){
        form.classList.add("active");
      }
    });
    // console.log(e.currentTarget.dataset.id);
  });
})
