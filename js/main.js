document.addEventListener('DOMContentLoaded', function () {

    AOS.init({
        offset: 600
    });

    // dodaje cień do nawigacji
    const nav = document.querySelector('.navbar');

    function addShadow() {
        if (window.scrollY >= 15) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    window.addEventListener('scroll', addShadow)


    // skrypt ukrywający nawigację po kliknięciu w cokolwiek na urządzeniach mobilnych
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });


    // menu-tabs
    const chooseCarsTypeBtns = document.querySelectorAll('.choose-cars-type-btn')
    const carsSections = document.querySelectorAll('.cars-section')
    const carsSectionHeadings = document.querySelectorAll('.our-cars h3')


    chooseCarsTypeBtns.forEach(btn => btn.addEventListener('click', e => {
        const btnCarsTypeText = e.target.textContent

        const removeAllClasses = () => {
            chooseCarsTypeBtns.forEach(btn => btn.classList.remove('active-btn'))
            carsSections.forEach(carsSection => carsSection.classList.remove('active-section'))
            carsSectionHeadings.forEach(carsSectionHeading => carsSectionHeading.classList.remove('active-heading'))
        }

        const addActiveClasses = index => {
            chooseCarsTypeBtns[index + 1].classList.add('active-btn')
            carsSections[index].classList.add('active-section')
            carsSectionHeadings[index].classList.add('active-heading')
        }

        switch (btnCarsTypeText) {
            case 'Wszystkie samochody':
                chooseCarsTypeBtns.forEach(btn => btn.classList.remove('active-btn'))

                chooseCarsTypeBtns[0].classList.add('active-btn')
                carsSections.forEach(carsSection => carsSection.classList.add('active-section'))
                carsSectionHeadings.forEach(carsSectionHeading => carsSectionHeading.classList.add('active-heading'))
                break

            case 'Samochody sportowe':
                removeAllClasses()
                addActiveClasses(0)
                break

            case 'Samochody luksusowe':
                removeAllClasses()
                addActiveClasses(1)
                break

            case 'Kabriolety':
                removeAllClasses()
                addActiveClasses(2)
                break
        }
    }))
})