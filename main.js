document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#section1 .icons').addEventListener('click', function(event) {
        if(event.target.id === 'icon-next') {
            document.getElementById('section1').style.display = 'none';
            document.getElementById('section2').style.display = 'flex';
        }
    });

    document.querySelector('#section2 .icons').addEventListener('click', function(event) {
        if(event.target.id === 'icon-prev') {
            document.getElementById('section2').style.display = 'none';
            document.getElementById('section1').style.display = 'flex';
        }
    });
});
