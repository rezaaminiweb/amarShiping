$(document).ready(function () {
    let navbar = $('.sdnavbar')
    let menusamtR = $('.menusamtrasti')
    let divbar = $('.divbody1')
    let storemage2 = $('.stormage')
    let andis = 0;
    let context23 = $('.context23')
    let f1 = $('.f1')
    let f2 = $('.f2')
    let carsoler = $('.carsoler')
    let i = 0
    let bazkhord12 = $('.bazkhord12')
    let bazkhordbozorg = $('.bazkhordbozorg')
    $(window).on('scroll resize', function () {
        let hbazbozorg = bazkhordbozorg.offset()
        let hbazTop = hbazbozorg.top
        
        bazkhord12.css({
            "position": "fixed",
            "top": hbazTop + "px",
            "left":"0%"
        });
    })
    
    storemage2.on('click', (event) => {

        storemage2.each((index, item) => {
            $(item).removeClass('active')
        })
        $(event.currentTarget).addClass('active')
        context23.each((index, item) => {
            $(item).css({"display":"none"})
        })

        andis = storemage2.index(event.currentTarget)
        context23.eq(andis).css({"display":"block"})
    })
    context23.each((item, index) => {
        $(index).css({"display":"none"})
    })
    context23.eq(1).css({"display":"block"})
    f1.on('click', () => {
        i+=100
        if (i > 330) {
            i=300
        }
        carsoler.css({ "transform": 'translateY(' + (-i) + 'px)' })
        console.log(i)
    })
    f2.on('click', () => {
        i -= 105
        if (i < 0) {
            i = 0
        }
        carsoler.css({ "transform": 'translateY(' + (-i) + 'px)' })
        console.log(i)
       
    })
  
    console.log(storemage2)
    console.log(navbar)
    
    navbar.on('click', (e) => {
        
        navbar.toggleClass('bi-list bi-x');
        
        menusamtR.toggleClass('w-0 col-6')
        divbar.toggleClass('divbody2 divbody1')
    })
    divbar.on('click', () => {
        
        navbar.toggleClass('bi-list bi-x');
        divbar.toggleClass('divbody2 divbody1')
        menusamtR.toggleClass('w-0 col-6')
        console.log('reza')
        
       
    })

    //alert('reza')
})