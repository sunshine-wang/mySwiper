(function () {

    var width = document.getElementsByClassName('swiper_panel')[0].clientWidth,
        swiperContent = document.getElementsByClassName('swiper_content')[0],
        list = swiperContent.childElementCount;
    var Swiper = function () {
        return new Swiper.fn.init();
    };
    Swiper.fn = Swiper.prototype = {
        constructor: Swiper,
        right: function () {
            var currentLeft = swiperContent.style.marginLeft;
            swiperContent.style.marginLeft = parseInt(currentLeft) - width + 'px';
            swiperContent.style.transition = 'margin-left 0.3s';
            if (-(list - 1) * 500 == parseInt(swiperContent.style.marginLeft)) {
                setTimeout(_ => {
                    swiperContent.style.marginLeft = 0 + 'px';
                    swiperContent.style.transition = 'margin-left 0s';
                }, 300);
            }
            return this;
        },
        left: function () {
            if (0 == parseInt(swiperContent.style.marginLeft)) {
                swiperContent.style.transition = 'margin-left 0s';
                swiperContent.style.marginLeft = -(width * (list - 1)) + 'px';
            }
            var currentLeft = swiperContent.style.marginLeft;
            setTimeout(_ => {
                swiperContent.style.transition = 'margin-left 0.3s';
                swiperContent.style.marginLeft = parseInt(currentLeft) + width + 'px';
            }, 0);
            return this;
        },
        check: function (event) {
            var barList = document.getElementsByClassName('bar_icon')[0].children;
            for (var i = 0; i < barList.length; i++) {
                if (barList[i] == event.target) {
                    console.log(i);
                    swiperContent.style.marginLeft = -width * i + 'px';
                    swiperContent.style.transition = 'margin-left 0.3s';
                }
            }
            return this;
        },
        xunhuan: function () {
            setInterval(_ => {
                this.right();
            }, 2000);
            return this;
        }
    }

    var init = Swiper.fn.init = function(){
        return this;
    }

    init.prototype = Swiper.fn;

    var $s = window.Swiper = Swiper;
    return Swiper;
})()