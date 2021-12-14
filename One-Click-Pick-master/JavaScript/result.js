window.addEventListener('load', () => {

    // Via Query parameters - GET
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const surname = params.get('surname'); */

    // Via local Storage
    /* const name = localStorage.getItem('NAME');
    const surname = localStorage.getItem('SURNAME'); */

    const name = sessionStorage.getItem('NAME');
    const email = sessionStorage.getItem('EMAIL');
    const pass = sessionStorage.getItem('PASS');
    const phone = sessionStorage.getItem('PHONE');
    
    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-email').innerHTML = email;
    document.getElementById('result-password').innerHTML = pass;
    document.getElementById('result-phone').innerHTML = phone;

})
