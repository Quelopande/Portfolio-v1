const $form = document.querySelector('#form');
const $buttonMail = document.querySelector('#aa');
$form.addEventListener('submit', handleSubmit);
function hadleSubmit(event){
    event.preventDefault()
    const form = new FormData(This)
    console.log(form.get('name'))
    $buttonMail.setAttribute('href', `mailto:quelopande@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
    $buttonMail.click()
}