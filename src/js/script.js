document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger, ScrollToPlugin);

  let scrollTriggerActivated = false;

  document.querySelector('body').classList.remove('overflow-hidden');

  // let smoother = ScrollSmoother.create({
  //   wrapper: '#smooth-wrapper',
  //   content: '#smooth-content',
  //   smooth: 1,
  //   smoothTouch: 0.1,
  // });

  const tl1 = gsap.timeline();
  const tl2 = gsap.timeline();

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#pt',
      start: '0.2% top',
      end: '98% top',
      pin: true,
      pinSpacing: false,
      scrub: 1,
      onEnter: () => {
        if (!scrollTriggerActivated) {
          scrollTriggerActivated = true;

          document.querySelector('body').classList.add('overflow-hidden');

          gsap.to(window, { 
            duration: 0.5, 
            scrollTo: "#resume",
            onComplete: () => {
              scrollTriggerActivated = false;
            } 
          });

          tl1.to('#boxResume', {
            scrollTrigger: {
              trigger: '#pt',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
            ease: "power2.inOut",
            width: '100%',
            borderRadius: '12px',
            padding: '40px',
            gap: '40px',
          })
          .to('#boxPersonal', {
            scrollTrigger: {
              trigger: '#pt',
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
            ease: "power2.inOut",
            opacity: 0,
          })
          
        }

        setTimeout(function() {
          tl2.to('#contentResume', {
            ease: "none",
            duration: 1,
            maxWidth: 999,
            maxHeight: 300,
          })
          .to('#contentResume', {
            ease: "power2.inOut",
            duration: 1,
            opacity: 1,
            onComplete: () => {
              document.querySelector('body').classList.remove('overflow-hidden');
            }
          })
        }, 0);
      },
      onEnterBack: () => {
        if (!scrollTriggerActivated) {
          scrollTriggerActivated = true;
          
          document.querySelector('body').classList.add('overflow-hidden');
          
          gsap.to(window, { 
            duration: 0.5, 
            scrollTo: "#section1",
            onComplete: () => {
              scrollTriggerActivated = false;
            } 
          });
        }

        tl2.to('#contentResume', {
          duration: 0.5,
          maxHeight: 0,
          maxWidth: 0,
          opacity: 0,
        })
      },
  
      onLeaveBack: () => {
        document.querySelector('body').classList.remove('overflow-hidden');
      },
      markers: true,
    }
  });

  tl.to('#pt', {
    height: 0,
  });

  gsap.to('#block', {
    scrollTrigger: {
      trigger: '#pt',
      start: 'top top',
      end: 'bottom top',
      pin: '#block',
      pinSpacing: false,
      scrub: 1,
      markers: true,
    }
  });

  document.getElementById('scrollArrow').addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: "#resume" });
  });
});