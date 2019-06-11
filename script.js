$(".pepperoni-olives").click(function() {
    hideAllToppings();
    addPepperoni();
    addOlives();
});

$(".pepperoni-mushrooms").click(function() {
    hideAllToppings();
    addPepperoni();
    addMushrooms();
});

$(".vegetarian").click(function() {
    hideAllToppings();
    addOlives();
    addMushrooms();
});

function hideAllToppings() {
    $(".topping").hide();
}
function addPepperoni() {
     $(".pepperoni").show();
}
function addOlives() {
    $(".olives").show();
}
function addMushrooms() {
    $(".mushrooms").show();
}
