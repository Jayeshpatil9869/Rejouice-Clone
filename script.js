function loaderAnimation() {
  var tl2 = gsap.timeline();

  tl2.from(".loader h3", {
    x: 200,
    duration: 0.9,
    stagger: 0.2,
    opacity: 0,
  });
  tl2.to(".loader h3", {
    x: -60,
    opacity: 0,
    stagger: 0.2,
    duration: 0.9,
  });
  tl2.to(".loader", {
    opacity: 0,
  });
  tl2.from(".page1-content h1 span", {
    y: 200,
    opacity: 0,
    stagger: 0.1,
    delay: -0.5,
  });

  tl2.to(".loader", {
    display: "none",
  });
}

function cursorEffect() {
  var page1Cont = document.querySelector(".page1-content");
  var cursor = document.querySelector(".cursor");
  var navMenu = document.querySelector("nav a");

  page1Cont.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });

  page1Cont.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Cont.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

  // Exclude the menu area from triggering cursor scaling
  navMenu.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });

  navMenu.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
}

function scrollEft() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function menuToggle() {
  var menu = document.querySelector("nav a");
  var fullScreen = document.querySelector(".menupagediv");

  flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      fullScreen.style.top = 0;
      flag = 1;
      menu.innerHTML = "close";
      menu.style.color = "#000";
      menutextAnimation();
    } else {
      fullScreen.style.top = "-100vh";
      flag = 0;
      menu.innerHTML = "Menu";
      menu.style.color = "#fff";
    }
  });
}

function menutextAnimation() {
  var inTime = gsap.timeline();
  inTime.from(".menuTop .mTopRight a", {
    y: -300,
    stagger: 0.2,
  });
  inTime.from(".menubtm h3, .btmright a", {
    y: 100,
    stagger: 0.2,
  });
}

function page2Animation() {
  gsap.from(".page2-top h3, .page2-top h4", {
    y: 100,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 40%",
      end: "top 46%",
      scrub: 3,
    },
  });

  gsap.from(".elem h1", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page2",
      scroller: ".main",
      start: "top 36%",
      end: "top 46%",
      scrub: 3,
    },
  });
}

function page3Animation() {
  gsap.from(".page3-top h2", {
    y: 400,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page3",
      scroller: ".main",
      start: "top 50%",
      end: "top 46%",
      scrub: 3,
      //   markers: true,
    },
  });
}

function page4Animation() {
  gsap.from(".page4-top h3", {
    y: 100,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 50%",
      end: "top 46%",
      scrub: 3,
    },
  });

  gsap.from(".elem2 h1", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top 36%",
      end: "top 46%",
      scrub: 3,
    },
  });
}

function page5Animation() {
  gsap.from(".page5-top h3", {
    y: 100,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      start: "top 60%",
      end: "top 54%",
      scrub: 3,
      //   markers: true,
    },
  });

  gsap.from(".elem3 h1", {
    y: 320,
    stagger: 0.2,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page5",
      scroller: ".main",
      start: "top 56%",
      end: "top 54%",
      scrub: 3,
    },
  });
}

function page5Bottom() {
  gsap.from(".page5Bottom h2, .page5Bottom h4", {
    y: 120,
    duration: 0.4,
    scrollTrigger: {
      trigger: ".page5Bottom",
      scroller: ".main",
      start: "top 60%",
      end: "top 54%",
      scrub: 3,
      // markers: true,
    },
  });
}

function pageFooterAnimation() {
  gsap.from(".ftb h1 span", {
    y: -200,
    stagger: 0.1,
    duration: 1,
    delay: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".footerbottom",
      scroller: ".main",
      start: "top 60%",
      end: "top 54%",
      scrub: 3,
      // markers: true,
    },
  });
}

loaderAnimation();
menuToggle();
cursorEffect();
scrollEft();
page2Animation();
page3Animation();
page4Animation();
page5Animation();
page5Bottom();
pageFooterAnimation();
