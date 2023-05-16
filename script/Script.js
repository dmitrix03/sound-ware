let activeButtons = document.querySelectorAll(".catalog_button");
let cost = document.querySelector(".container_cost"); 
let manufacturer = document.querySelector(".container_manufacturer");
let sorting = document.querySelector('.sorting_container');

activeButtons[1].addEventListener(('click'), function(){
    if(cost.style.display == "none"){
        cost.style.display = "block";
    }else{
        cost.style.display = "none";
    }
});
activeButtons[2].addEventListener(('click'), function(){
    if(manufacturer.style.display == "none"){
        manufacturer.style.display = "block";
    }else{
        manufacturer.style.display = "none";
    }
});

activeButtons[3].addEventListener(('click'), function(){
    if(sorting.style.display == "none"){
        sorting.style.display = "block";
    }else{
        sorting.style.display = "none";
    }
});

