// import Notiflix from "notiflix";

const form = document.querySelector('#main');
const button = document.querySelector('button');
const reqInputs = document.querySelectorAll('._req');

form.addEventListener('input', buttonDisabled);

function buttonDisabled(e) {
    let data = [];

    reqInputs.forEach(input => {
        data.push(input.value);
    });
    if (data.includes('')) {
        button.disabled = true;
    } else {
        form.addEventListener('submit', formSubmit);

        button.disabled = false;
    }
}

function formSubmit(e) {
    e.preventDefault();

    let error = formValidate(e.target);

    if (error === 0) {
        alert("Ваши данные отправленны в обработку. С вами скоро свяжутся!")
        // Notiflix.Notify.success('Ваши данные отправленны в обработку. С вами скоро свяжутся!');
       
    } else {
        alert("Данные введены не корректно!!!")
        // Notiflix.Notify.failure('Данные введены не корректно!!!');
        
    }
}

//
function formValidate(form) {
    let error = 0;

    for (let i = 0; i < reqInputs.length; i++) {
        const input = reqInputs[i];
        formRemoveError(input);
;

        if (input.classList.contains('_name')) {
            let re = /^[a-z\s]+$/i;            

            if (input.value.match(re) === null) {
                formAddError(input);
                error++;
            }
        } else if (input.classList.contains('_age')) {
            let re = /^\d+$/;
            
            if (input.value.match(re) === null) {
                formAddError(input);
                error++;
            }
        } else if (input.classList.contains('_phone')) {           
            let re = /\b[+]?[-0-9\(\) ]{11,20}\b/; 

            if (input.value.match(re) === null) {
                formAddError(input);
                error++;
            }
        } 
    }

    return error;
}

function formAddError(input) {
    const label = document.querySelector(`[for="${input.id}"]`);
    
    input.classList.add('_error');    

    if (input.id === 'name') {
        label.innerHTML = '*Пишите на кирилице';
    } else if (input.id === 'age') {
        label.innerHTML = '*Укажите свой возраст';
    } else if (input.id === 'phone') {
        label.innerHTML = '*Некорректно введен номер';
    }
}

function formRemoveError(input) {
    input.classList.remove('_error');
}

reqInputs.forEach(input => {
    input.addEventListener('input', labelRemove);
});
function labelRemove(e) {
    const id = e.target.id;
    const label = document.querySelector(`[for="${id}"]`);

    if (label.value !== '') {
        button.disabled = true;
        label.innerHTML = '';
    }
}
