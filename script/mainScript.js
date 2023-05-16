const showMoreButton = document.querySelector('.show_more');
const showManufacter = document.querySelectorAll('.additional_level');

showMoreButton.addEventListener('click', function(){
    for(let additional_level of showManufacter){
        additional_level.style.display = 'flex'
    }

    showMoreButton.style.display = 'none'
});

