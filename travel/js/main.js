(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    };
}());
// burger 
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    })
}());
// end 

// (function () {

//     const smoothScroll = function (target, duration) {
//         const headerElHeight = document.querySelector('.header').clientHeight;
//         let target = document.querySelector(targetEl);
//         let targetPosition = target.getBoundingClientRect().top - headerElHeight;
//         let startPosition = window.pageYOffset;
//         let startTime = null;

//         const ease = function (t, b, c, d) {
//             t /= d / 2;
//             if (t < 1) return c / 2 * t * t + b;
//             t--;
//             return -c / 2 * (t * (t - 2) - 1) + b;
//         };

//         const animation = function (currentTime) {
//             if (startTime === null) startTime = currentTime;
//             const timeElapsed = currentTime - startTime;
//             const run = ease(timeElapsed, startPosition, targetPosition, duration);
//             window.scrollTo(0, run);
//             if (timeElapsed < duration) requestAnimationFrame(animation);
//         };
//         requestAnimationFrame(animation);
//     };

//     const scrollTo = function () {
//         const links = document.querySelectorAll('.js-scroll');
//         links.forEach(each => {
//             each.addEventListener('click', function () {
//                 const currentTarget = this.getAttribute('href');
//                 smoothScroll(currentTarget, 1000);
//             });
//         });
//     };
//     scrollTo();
// }());


(function () {
    // Fixed smoothScroll function
    const smoothScroll = function (targetEl, duration) {
        const headerEl = document.querySelector('.header');
        // Check if header exists to avoid errors
        const headerElHeight = headerEl ? headerEl.clientHeight : 0;
        const target = document.querySelector(targetEl);

        // If target doesn't exist, exit the function
        if (!target) return;

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerElHeight;
        const startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition - startPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function (e) {
                e.preventDefault();
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scrollTo);
    } else {
        scrollTo();
    }
})(); 