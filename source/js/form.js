"use strict";

;(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();

      var error = formValidate(form);

      let formData = new FormData(form);


      if (error === 0) {
        form.classList.add('_sending');
        let response = await fetch('sendmail.php', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formPreview.innerHTML = '';
          form.reset();
          form.classList.remove('_sending');
        } else {
          alert("Ошибка");
          form.classList.remove('_sending');
        }
      } else {
        alert('Заполните обязательные поля');
      }

    }


    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('.req');

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('email')) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
          formAddError(input);
          error++;
        } else {
          if (input.value === '') {
            formAddError(input);
            error++;
          }
        }
      }
      return error;
    }
    function formAddError(input) {
      input.parentElement.classList.add('error');
      input.classList.add('error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('error');
      input.classList.remove('error');
    }
    //Функция теста email
    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
  });
})();
