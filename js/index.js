$(".owl-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  autoplaySpeed: 1000,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

$(".owl-2").owlCarousel({
  loop: false,
  margin: 20,
  nav: false,
  // autoplay: true,
  // autoplayTimeout: 5000,
  // autoplayHoverPause: false,
  // autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

$(".counter").counterUp({
  delay: 10,
  time: 2000,
});

$(".play-button").magnificPopup({
  type: "iframe",
  iframe: {
    markup:
      '<div class="mfp-iframe-scaler">' +
      '<div class="mfp-close"></div>' +
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
      "</div>", 

    patterns: {
      vimeo: {
        index: "vimeo.com/",
        id: "/",
        src: "//player.vimeo.com/video/%id%?autoplay=1",
      },
    },

    srcAction: "iframe_src",
  },
});

// $('.item-price').on('click', function(event) {
//   console.log(event);
//   // console.log('click')
//   event.target.classList.add('active');
//   document.getElementById('item-price').classList.add('active')
// });

function toggleState(e) {
  e.classList.toggle("fa-xmark");
}