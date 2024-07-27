//template template_m2wpgnx
//service service_47p1pra
//userID dugW4jqJvor1mj9UW
function contact() {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_47p1pra',
            'template_m2wpgnx',
            event.target,
            'dugW4jqJvor1mj9UW'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                'The email service is temporarily unavailable. Please contact me directly on peardon.reece@gmail.com'
            )
        })
}

function toggleModal() {

}