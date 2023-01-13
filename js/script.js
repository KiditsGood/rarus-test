const navSelector = $('.nav')
const navNextSelector = $('.nav__next')

function navScrollHandler(){
    let currPos = navSelector.scrollLeft() + 100

    navSelector.animate({scrollLeft: currPos}, 300)
}

function catalogHandler(){
    $('.burger').click(() => {
        $('.catalog').addClass('open')
        $('body').addClass('hidden')
    })

    $('.catalog__close').click(() => {
        $('.catalog').removeClass('open')
        $('body').removeClass('hidden')
    })
}

navNextSelector.click(() => {
    navScrollHandler()
})

catalogHandler()