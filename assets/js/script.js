$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
    var autoplaySlider = $('#autoWidth').lightSlider({
        item: 4,
        auto: true,
        loop: true,
        pauseOnHover: true,
        onBeforeSlide: function(el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
$(document).ready(function() {
    $('#popular_slide').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function() {
            $('#sakib').removeClass('cS-hidden');
        }
    });
    var autoplaySlider = $('#popular_slide').lightSlider({
        item: 4,
        auto: true,
        loop: true,
        pauseOnHover: true,
        onBeforeSlide: function(el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
$(document).ready(function() {
    // MDB Lightbox Init
    $(function() {
        $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
    });
});

// modal 
// // Get the modal
// var modals = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//     modals.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modals.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modals) {
//         modals.style.display = "none";
//     }
// }