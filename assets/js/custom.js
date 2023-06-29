console.log("         ,_---~~~~~----._         \r\n  _,,_,*^____      _____``*g*\\\"*, \r\n \/ __\/ \/\'     ^.  \/      \\ ^@q   f \r\n[  @f | @))    |  | @))   l  0 _\/  \r\n \\`\/   \\~____ \/ __ \\_____\/    \\   \r\n  |           _l__l_           I   \r\n  }          [______]           I  \r\n  ]            | | |            |  \r\n  ]             ~ ~             |  \r\n  |                            |   \r\n   |                           |   ");

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// document.getElementById('btnSwitch').addEventListener('click',()=>{
//     if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
//         document.documentElement.setAttribute('data-bs-theme','light')
//     }
//     else {
//         document.documentElement.setAttribute('data-bs-theme','dark')
//     }
// });