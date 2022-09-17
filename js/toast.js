const toastSuccess = Toastify({
    text: 'Ваши данные отправленны в обработку. С вами скоро свяжутся!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top', 
    position: 'right', 
    stopOnFocus: true, 
    style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
    },
});

const toastError = Toastify({
    text: 'Данные введены не корректно!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top', 
    position: 'right', 
    stopOnFocus: true, 
    style: {
        background: 'linear-gradient(to right, red, #96c93d)',
    },
});


export {toastSuccess, toastError}