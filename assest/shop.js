
  $(window).on("scroll", function() {
    $(".animate-on-scroll").each(function() {
      if ($(this).offset().top <= $(window).scrollTop() + $(window).height() && !$(this).hasClass("in-view")) {
        $(this).addClass("in-view");
      }
    });
  });  


  function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
      var dropdownMenu = document.getElementById("dropdown-menu");
      if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
      }
    }
  }