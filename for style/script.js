const showDescription = document.querySelectorAll('.show-more')

showDescription.forEach(elem => {
    elem.addEventListener("click", () => {
        const details = document.createElement('p')
        details.innerHTML = "Tu jest ten tekst, który chce dodać"
        document.querySelector('.recipe').appendChild(details);

    });
});

