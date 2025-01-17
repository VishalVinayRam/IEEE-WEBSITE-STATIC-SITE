/**
 * Template Name: Arsha - v2.2.0
 * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $("#header").outerHeight() - 2;
  $(document).on(
    "click",
    ".nav-menu a, .mobile-nav a, .scrollto",
    function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();

          var scrollto = target.offset().top - scrolltoOffset;
          if ($(this).attr("href") == "#header") {
            scrollto = 0;
          }

          $("html, body").animate(
            {
              scrollTop: scrollto,
            },
            1500,
            "easeInOutExpo"
          );

          if ($(this).parents(".nav-menu, .mobile-nav").length) {
            $(".nav-menu .active, .mobile-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
          }

          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-toggle i").toggleClass(
              "icofont-navigation-menu icofont-close"
            );
            $(".mobile-nav-overly").fadeOut();
          }
          return false;
        }
      }
    }
  );

  // Activate smooth scroll on page load with hash links
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // Mobile Navigation
  // Mobile Navigation
  if ($(".nav-menu").length) {
    var $mobile_nav = $(".nav-menu").clone().prop({
      class: "mobile-nav d-lg-none",
    });
    $("body").append($mobile_nav);
    $("body").prepend(
      '<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
    );
    $("body").append('<div class="mobile-nav-overly"></div>');

    // Disable links
    const disabledLinks = document.querySelectorAll(".disabled-link");
    disabledLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
      });
    });

    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-toggle i").toggleClass(
        "icofont-navigation-menu icofont-close"
      );
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, #mobile-nav");

  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function () {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
  }

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Skills section
  $(".skills-content").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    {
      offset: "80%",
    }
  );

  // Porfolio isotope and filter
  $(window).on("load", function () {
    var portfolioIsotope = $(".portfolio-container").isotope({
      itemSelector: ".portfolio-item",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("filter-active");
      $(this).addClass("filter-active");

      portfolioIsotope.isotope({
        filter: $(this).data("filter"),
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function () {
      $(".venobox").venobox({
        share: false,
      });
    });
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);

// ======================== DARK MODE JS =======================================//
// custom js for dark mode.
const moon = document.getElementById("moon-icon");
let count = 0;

moon.addEventListener("click", (e) => {
  moon.classList.toggle("bxs-moon");
  moon.classList.toggle("bxs-sun");
  if (count % 2 == 0) {
    document.documentElement.style.setProperty("--text-color", "#ffffffcd");
    document.documentElement.style.setProperty(
      "--accordion-list-color",
      "#0d1117"
    );
    document.documentElement.style.setProperty(
      "--accordion-collapse-color",
      "white"
    );
    document.documentElement.style.setProperty("--subheading-color", "white");
    document.documentElement.style.setProperty("--white-text-color", "white");
    document.documentElement.style.setProperty("--dark-div-color", "#161a23"); // light dark color
    document.documentElement.style.setProperty("--hero-section-color", "black");
    // document.documentElement.style.setProperty("--subheading-color", "white");
    // document.documentElement.style.setProperty("--white-div-color", "black");
    document.body.style.backgroundColor = "#0d1117"; // dark color
    count++;
  } else {
    document.documentElement.style.setProperty("--text-color", "#444444");
    document.documentElement.style.setProperty(
      "--accordion-list-color",
      "white"
    );
    document.documentElement.style.setProperty(
      "--accordion-collapse-color",
      "#343a40;"
    );
    document.documentElement.style.setProperty("--subheading-color", "#37517e");
    document.documentElement.style.setProperty("--white-text-color", "#fff"); // grayish color
    document.documentElement.style.setProperty("--dark-div-color", "#f3f4fb");
    document.documentElement.style.setProperty(
      "--hero-section-color",
      "#37517e"
    );
    // document.documentElement.style.setProperty("--subheading-color", "white");
    // document.documentElement.style.setProperty("--white-div-color", "black");
    document.body.style.backgroundColor = "white";
    count++;
  }
});

// Get the hash from the URL
const hash = window.location.hash;

// Check if the hash exists and is not empty
if (hash && hash !== "") {
  // Remove the '#' character from the hash
  const sectionId = hash.substring(1);

  // Find the element with the corresponding ID
  const targetElement = document.getElementById(sectionId);

  // Check if the target element exists
  if (targetElement) {
    // Scroll to the target element
    targetElement.scrollIntoView();
  }
}

// ================== Handling component shifting =======================//
const gallery = document.getElementById("gallery");
const galleryBtn = document.getElementById("gallery-btn");
const homePage = document.getElementById("home-page");
const homeBtn = document.getElementById("home-btn");
const allLi = document.getElementsByTagName("li");
console.log(allLi);

galleryBtn.addEventListener("click", () => {
  gallery.classList.remove("display__none");
  homePage.classList.add("display__none");
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Add smooth scrolling animation
  });
});

homeBtn.addEventListener("click", () => {
  gallery.classList.add("display__none");
  homePage.classList.remove("display__none");
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Add smooth scrolling animation
  });
});

for (let i = 0; i < 8; i++) {
  if (i == 5) {
  } else {
    allLi[i].addEventListener("click", () => {
      gallery.classList.add("display__none");
      homePage.classList.remove("display__none");
    });
  }
}

// =========================== To configure disabled links ========================//
// Get all disabled link elements
const disabledLinks = document.querySelectorAll(".disabled-link");

// Loop through each disabled link
disabledLinks.forEach((link) => {
  // Add click event listener
  link.addEventListener("click", function (event) {
    // Prevent the default link behavior
    event.preventDefault();
  });
});
