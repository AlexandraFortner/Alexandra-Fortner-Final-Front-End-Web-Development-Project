// MAIN DATA STARTS
var INVENTORY = [
    { name: 'Batman: The Killing Joke', price: 16.28 },
    { name: 'Batman: Noël', price: 18.39 },
    { name: 'Batman: Year One', price: 5.93 },
    { name: 'Wolverine Goes To Hell', price: 10.23 },
    { name: 'The Death Of Superman', price: 12.19 },
    { name: 'Batman: Hush', price: 7.21 },
    { name: 'Wonder Woman: The Hiketeia', price: 17.31 },
    { name: 'Planet Hulk', price: 23.32 },
    { name: 'Avengers: Time Runs Out', price: 21.22 },
    { name: 'Deadpool Kills The Marvel Universe', price: 18.43 },
    { name: 'Sgt. Fury and his Howling Commandos: Volume 1', price: 26.75 }
];

// MAIN DATA ENDS
// FOR LOOPS START

function show_inventory() {
    inventory = '';
    for (i = 0; i < INVENTORY.length; i++) {
        inventory +=
            '<p><b>&nbsp;&nbsp;' +
            INVENTORY[i].name +
            '<br>$' +
            INVENTORY[i].price +
            '<br><button id="AddToCart">Add To Cart</button><br><button id="RemoveFromCart">Remove From Cart</button>';
        ('</p>');
    }
    $('#Inventory-List').html(inventory);
}

// FOR LOOPS END

function main() {
    show_inventory();
}

$(main);
