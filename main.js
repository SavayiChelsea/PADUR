    // Wait for DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        const dropdownButton = document.getElementById('dropdownButton');
        const dropdownMenu = document.getElementById('dropdownMenu');
        
        if(dropdownButton && dropdownMenu) {
            // Toggle menu on button click
            dropdownButton.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdownMenu.classList.toggle('hidden');
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', function() {
                dropdownMenu.classList.add('hidden');
            });
            
            // Prevent menu from closing when clicking inside it
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });
    

document.addEventListener('DOMContentLoaded', function() {
    let swiper = new Swiper(".swiper .container", {
        slidesPerView: "auto",
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
        // When window width is >= 768px (tablet)
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // When window width is >= 1024px (desktop)
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
    });
});

window.addEventListener("load", function () {
        window.cookieconsent.initialise({
        palette: {
            popup: { background: "#fff" },
            button: { background: "#f1d600" }
        },
        theme: "classic",
        position: "bottom-right",
        content: {
            message: "This website uses cookies to ensure you get the best experience.",
            dismiss: "Got it!",
            link: "Learn more",
            href: "privacy-policy.html"
        },
        // <- THIS ensures cookie is session-only (clears on browser close)
        cookie: {
            name: "cc_cookie",
            expiryDays: 0 // expires on browser close
        }
        });
    });