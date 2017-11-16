// MAIN DATA STARTS
var INVENTORY = [
    {
        name: 'Batman: The Killing Joke',
        price: 16.28,
        inStock: 20,
        picture_url:
            'http://www.thenerdelement.com/wordpress/wp-content/uploads/2016/07/Batman-The-Killing-Joke_Sdtk_Cover_1425px_RGB_300dpi.jpg'
    },
    {
        name: 'Batman: Noël',
        price: 18.39,
        inStock: 24,
        picture_url:
            'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Series/12433/12433._SX360_QL80_TTD_.jpg'
    },
    {
        name: 'Batman: Year One',
        price: 5.93,
        inStock: 22,
        picture_url:
            'https://images-na.ssl-images-amazon.com/images/I/51sroPQ%2B9-L._SY344_BO1,204,203,200_.jpg'
    },
    {
        name: 'Wolverine Goes To Hell',
        price: 10.23,
        inStock: 12,
        picture_url:
            'https://www298.lunapic.com/do-not-link-here-use-hosting-instead/151085885388182?8615660644'
    },
    {
        name: 'The Death Of Superman',
        price: 12.19,
        inStock: 9,
        picture_url:
            'https://images-na.ssl-images-amazon.com/images/I/517ostOFBPL._SY344_BO1,204,203,200_.jpg'
    },
    {
        name: 'Batman: Hush',
        price: 7.21,
        inStock: 16,
        picture_url:
            'https://vignette.wikia.nocookie.net/marvel_dc/images/e/e2/Batman_-_Hush_TPB.jpg/revision/latest?cb=20131103230749'
    },
    {
        name: 'Wonder Woman: The Hiketeia',
        price: 17.31,
        inStock: 34,
        picture_url:
            'https://vignette.wikia.nocookie.net/marvel_dc/images/7/71/Wonder_Woman_The_Hiketeia_Vol_1_1.jpeg/revision/latest/scale-to-width-down/329?cb=20120722114037'
    },
    {
        name: 'Planet Hulk',
        price: 23.32,
        inStock: 6,
        picture_url:
            'http://images.comiccollectorlive.com/covers/f00/f005ca70-d137-4838-bc00-5d122d9a4410.jpg'
    },
    {
        name: 'Avengers: Time Runs Out',
        price: 21.22,
        inStock: 10,
        picture_url:
            'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/177253/DIG050003_1._SX1280_QL80_TTD_.jpg'
    },
    {
        name: 'Deadpool Kills The Marvel Universe',
        price: 18.43,
        inStock: 17,
        picture_url:
            'http://vignette3.wikia.nocookie.net/marveldatabase/images/1/19/Deadpool_Kills_the_Marvel_Universe_Vol_1_1.jpg/revision/latest?cb=20120731185747'
    },
    {
        name: 'Sgt. Fury and his Howling Commandos: Volume 1',
        price: 26.75,
        inStock: 4,
        picture_url:
            'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/596119/596119._SX1280_QL80_TTD_.jpg'
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
        draw();
        alertify.success(
            'You Added ' + INVENTORY[cart_item].name + ' to your cart!'
        );
    }
}
function RemoveFromCart(cart_item) {
    if (INVENTORY[cart_item].inStock) {
        alertify.error(
            'Sorry! ' + INVENTORY[cart_item].name + ' is out of stock!'
        );
    } else {
        INVENTORY[cart_item].inStock += 1;
        draw();
        alertify.log(
            'You Removed ' + INVENTORY[cart_item].name + ' from your cart.'
        );
    }
}
// SMALL FUNCTIONS END
// JQUERY STARTS

// JQUERY ENDS
// .CLICKS START
$('#cart-button').click(function() {
    $('#Inventory-List').html('');
    cart = '';
    cart = '<button id="Back-Button" onclick="draw()">Back</button><br>Total:';
    for (n = 0; n < CART.length; n++) {
        var total = CART[n].price;
        console.log(total);
        cart +=
            '<br><br><b><li>' +
            CART[n].name +
            '</li></b><button id="RemoveFromCart" onclick="RemoveFromCart(' +
            n +
            ')"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></button>';
    }
    $('#Cart-List').html(cart);
});
// .CLICKS END

// MAIN FUNCTIONS BEGIN

function draw() {
    $('#Cart-List').html('');
    inventory = '';
    for (i = 0; i < INVENTORY.length; i++) {
        inventory +=
            '<p><div class="row"></b></div><br><div class="col"><button id="AddToCart" onclick="AddToCart(' +
            i +
            ')"><i class="fa fa-cart-plus fa-2x" aria-hidden="true"></i></button></div><img src="' +
            INVENTORY[i].picture_url +
            '"><div class="col"><b>&nbsp;&nbsp;' +
            INVENTORY[i].name +
            '<br>$' +
            INVENTORY[i].price +
            '<br>In Stock: ' +
            INVENTORY[i].inStock +
            '<br><div class="col"><button id="RemoveFromCart" onclick="RemoveFromCart(' +
            i +
            ')"><i class="fa fa-cart-arrow-down fa-2x" aria-hidden="true"></i></button></div></div></p>';
    }
    $('#Inventory-List').html(inventory);
}

function main() {
    draw();
}

// MAIN FUNCTIONS END

$(main);
