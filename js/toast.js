const toastSuccess = Toastify({
    text: 'Ваши данные отправленны в обработку. С вами скоро свяжутся!',
    duration: 3000,
    newWindow: true,
    close: false,
    gravity: 'top',
    position: 'right',
    stopOnFocus: true,
    style: {
        background:
            'linear-gradient(39deg, rgba(11,233,29,0.7931547619047619) 0%, rgba(207,191,8,0.8743872549019608) 43%, rgba(0,255,184,0.7819502801120448) 100%)',
        borderRadius: '15px',
        padding: '50px',
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
        background:
            'linear-gradient(39deg, rgba(233,11,11,0.7931547619047619) 0%, rgba(207,155,8,0.8743872549019608) 43%, rgba(255,252,0,0.7987570028011204) 100%)',
        borderRadius: '15px',
        padding: '50px',
    },
});

export { toastSuccess, toastError };
