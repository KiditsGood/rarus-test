const navSelector = $('.nav')
const navNextSelector = $('.nav__next')

function navScrollHandler(){
    let currPos = navSelector.scrollLeft() + 100

    navSelector.animate({scrollLeft: currPos}, 300)
}

function catalogHandler(){
    $('.burger').click(() => {
        $('.catalog').addClass('open')
    })

    $('.catalog__close').click(() => {
        $('.catalog').removeClass('open')
    })
}

navNextSelector.click(() => {
    navScrollHandler()
})

catalogHandler()