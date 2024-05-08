$(".banner_slider").slick({
    infinite: true,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
});

function openside() {
    document.querySelector(".header_nav").classList.add("active");
}

function closeside() {
    document.querySelector(".header_nav").classList.remove("active");
}
const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});