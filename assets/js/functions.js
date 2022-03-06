function showMenu(item, e) {
    $("#" + item).fadeToggle(300, function () {
        showMenuList();
    });
    removeScroll();
    event.preventDefault();
};

function hideMenu(item, e) {
    $("#" + item).fadeToggle(300);
    addScroll();
    hideMenuList();
    event.preventDefault();
};

function showMenuList() {
    $('#menuList').animate({
        'left': 0
    }, 300);
}

function hideMenuList() {
    $('#menuList').animate({
        'left': -300
    }, 300, );
}

function removeScroll() {
    $('body').addClass('noScroll');
}

function addScroll() {
    $('body').removeClass('noScroll');
}
$('#homeCarousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    swipe: true,
    pauseOnHover: true
});

$('#cakesGallery').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    swipe: true,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false
});
$('.flavourGallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    preload: [1, 1],
    preloader: true,
    fixedContentPos: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
});
$('.decorationGallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    preload: [1, 1],
    preloader: true,
    fixedContentPos: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
});

function galleryClick(e) {
    event.preventDefault();
};