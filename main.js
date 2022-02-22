const themeInput = document.getElementById('theme')
const body = document.querySelector('body')
const container = document.querySelector('#container')
const label = document.querySelector('#container .input label')

themeInput.addEventListener('change', function() {
    body.classList.toggle('darkTheme')
    container.classList.toggle('darkTheme')
    label.classList.toggle('darkTheme')
    theme.classList.toggle('darkTheme')
})