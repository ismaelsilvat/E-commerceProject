$('.arrow.second').click(function () {

    if ($('.ul-border2').hasClass('person-display-1')) {
        $('.ul-border2').removeClass('person-display-1')
        $(".arrow.second").css({ "top": "50%", "transform": "rotate(0deg)" });
        $(".a-ul-border2.first").removeClass('person-display-2')
        $(".a-ul-border2.second").removeClass('person-display-2')
        $(".a-ul-border2.third").removeClass('person-display-2')
        $(".a-ul-border2.first").css({
            "transition": "none !important",
            "transition-delay": "0ms"
        })
        $(".a-ul-border2.second").css({
            "transition": "none !important",
            "transition-delay": "0ms"
        })
        $(".a-ul-border2.third").css({
            "transition": "none !important",
            "transition-delay": "0ms"
        })
        $('.infantil-c2').removeClass('person-display-3')
        $('.ul-border2').removeClass('person-display-2')
    }

    else if ($('.ul-border2').hasClass('person-display-2')) {
        $('.ul-border2').removeClass('person-display-2')
        $(".a-ul-border2.first").removeClass('person-display-2')
        $(".a-ul-border2.second").removeClass('person-display-2')
        $(".a-ul-border2.third").removeClass('person-display-2')
        $('.infantil-c2').removeClass('person-display-3')
        $(".a-ul-border2.first").css({
            "transition": "none !important",
            "transition-delay": "0ms"
        })
        $(".a-ul-border2.second").css({
            "transition": "none !important",
            "transition-delay": "0ms"
        })
        $(".a-ul-border2.third").css({
            "transition": "none !important",
            "transition-delay": "0ms"
        })
        $(".arrow.second").css({ "top": "35%", "transform": "rotate(0deg)" });
    }

    else {
        $('.ul-border2').addClass('person-display-1')
        $(".arrow.second").css({ "top": "9%", "transform": "rotate(-180deg)" });
        $(".a-ul-border2.first").addClass('person-display-2')
        $(".a-ul-border2.second").addClass('person-display-2')
        $(".a-ul-border2.third").addClass('person-display-2')
        $(".a-ul-border2.first").css({ "transition": "visibility 300ms ease;" })
        $(".a-ul-border2.second").css({ "transition": "visibility 300ms ease;" })
        $(".a-ul-border2.third").css({ "transition": "visibility 300ms ease;" })
    }

});

$('.arrow.third').click(function () {

    if ($('.infantil-c2').hasClass('person-display-3')) {
        $('.infantil-c2').removeClass('person-display-3')
        $('.infantil-c2').css({
            "transition": "all 0ms ease !important",
            "transition": "0ms"
        })
        $('.infantil-c2').css({ "height": "0 !important" })
        $('.infantil-c2').css({ "visibility": "hidden !important" })
        $('.ul-border2').addClass('person-display-2')
        $(".arrow.third").css({ "top": "auto", "transform": "rotate(0deg)" });
        $(".arrow.second").css({ "top": "9%", "transform": "rotate(-180deg)" });
    }

    else if ($('.infantil-c2').hasClass('person-display-2')) {
        $('.ul-border2').css({ "height": "auto !important" })
        $('.infantil-c2').removeClass('person-display-2')
    }

    else {
        $(".arrow.second").css({ "top": "5.5%", "transform": "rotate(-180deg)" });
        $('.arrow.third').css({ "top": "78%", "transform": "rotate(-180deg)" })
        $('.infantil-c2').addClass('person-display-3')
        $('.ul-border2').removeClass('person-display-1')
        $('.ul-border2').addClass('person-display-2')
        $('.ul-border2').css({ "height": "auto !important" })
        $('.ul-border2').css({ "visibility": "visible !important" })
        $('.a-ul-border2.third').addClass('person-display-4')
    }

});