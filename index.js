// MAIN DATA STARTS
var INVENTORY = [
    { name: 'Batman: The Killing Joke', price: 16.28, inStock: 20 },
    { name: 'Batman: Noël', price: 18.39, inStock: 24 },
    { name: 'Batman: Year One', price: 5.93, inStock: 22 },
    { name: 'Wolverine Goes To Hell', price: 10.23, inStock: 12 },
    { name: 'The Death Of Superman', price: 12.19, inStock: 9 },
    { name: 'Batman: Hush', price: 7.21, inStock: 16 },
    { name: 'Wonder Woman: The Hiketeia', price: 17.31, inStock: 34 },
    { name: 'Planet Hulk', price: 23.32, inStock: 6 },
    { name: 'Avengers: Time Runs Out', price: 21.22, inStock: 10 },
    { name: 'Deadpool Kills The Marvel Universe', price: 18.43, inStock: 17 },
    {
        name: 'Sgt. Fury and his Howling Commandos: Volume 1',
        price: 26.75,
        inStock: 4
    }
];

var CART = [];

// MAIN DATA ENDS
// SMALL FUNCTIONS START
function AddToCart(cart_item) {
    if (INVENTORY[cart_item].inStock === 0) {
        alertify.error(
            'Sorry! ' + INVENTORY[cart_item].name + ' is out of stock!'
        );
    } else {
        INVENTORY[cart_item].inStock -= 1;
        CART.push(INVENTORY[cart_item]);
        console.log(CART);
        show_inventory();

        alertify.success(
            'You Added ' + INVENTORY[cart_item].name + ' to your cart!'
        );
    }
}
function RemoveFromCart(cart_item) {
    INVENTORY[cart_item].inStock += 1;
    show_inventory();
    alertify.error(
        'You Removed ' + INVENTORY[cart_item].name + ' from your cart!'
    );
}
// SMALL FUNCTIONS END
// JQUERY STARTS

// JQUERY ENDS
// .CLICKS START
$('#cart-button').click(function() {
    console.log('Cart was clicked!');
});
// .CLICKS END
// FOR LOOPS START

function show_inventory() {
    inventory = '';
    for (i = 0; i < INVENTORY.length; i++) {
        inventory +=
            '<p><b>&nbsp;&nbsp;' +
            INVENTORY[i].name +
            '<br>$' +
            INVENTORY[i].price +
            '<br>In Stock: ' +
            INVENTORY[i].inStock +
            '<br><button onclick="AddToCart(' +
            i +
            ')">Add To Cart</button><br><button id="RemoveFromCart" onclick="RemoveFromCart(' +
            i +
            ')">Remove From Cart</button></p>';
    }
    $('#Inventory-List').html(inventory);
}

// FOR LOOPS END
// MAIN FUNCTIONS BEGIN

function draw() {}

function main() {
    show_inventory();
}

// MAIN FUNCTIONS END

$(main);
