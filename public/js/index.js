function gotoProjects() {
    document.querySelector('.current-projects').scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start'
    });
}

var dt = new Date();
var currentYear = dt.getFullYear();
document.getElementById('current-year').innerHTML = currentYear;