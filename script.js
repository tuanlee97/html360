document.addEventListener("DOMContentLoaded", () => {
    // <!-- Initialize Swiper -->
    var swiper = new Swiper(".mySwiper", {
        lazy: true,
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1280: {
                slidesPerView: 4,
            }
        }
    });

    let ftVideo = document.getElementById("ftVideo");
    let btnPlayVideo = document.querySelector("#btnPlayVideo");
    let btnPauseVideo = document.querySelector("#btnPauseVideo");

    btnPlayVideo.addEventListener("click", () => {
        if (ftVideo.paused) {
            btnPlayVideo.classList.add("d-none");
            ftVideo.play();
        }
    })
    btnPauseVideo.addEventListener("click", () => {
        if (!ftVideo.paused) {
            btnPlayVideo.classList.remove("d-none");
            btnPauseVideo.classList.remove('pause-btn-hover')
            ftVideo.pause();
        }
    })
    btnPauseVideo.addEventListener("mouseover", (e) => {
        if (!ftVideo.paused) {
            btnPauseVideo.classList.add('pause-btn-hover')
        }
    }, false);

    ftVideo.addEventListener("mouseover", (e) => {
        if (!ftVideo.paused) {
            btnPauseVideo.classList.add('pause-btn-hover')
        }
    }, false);

    btnPauseVideo.addEventListener("mouseout", (e) => {
        if (!ftVideo.paused) {
            btnPauseVideo.classList.remove('pause-btn-hover')
        }
    }, false);

    ftVideo.addEventListener("mouseout", (e) => {
        if (!ftVideo.paused) {
            btnPauseVideo.classList.remove('pause-btn-hover')
        }
    }, false);
})
