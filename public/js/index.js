console.log('index.js');

/*
function gotoProjects() {
    document.getElementById('current-ventures').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start'
    });
}
*/

// navbar copyright year generation
var dt = new Date();
var currentYear = dt.getFullYear();
document.getElementById('current-year').innerHTML = currentYear;