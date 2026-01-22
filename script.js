document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const products = [
  { name: 'T-shirt', price: '$20', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/tshirt.jpg' },
  { name: 'Jeans', price: '$40', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/jeans.jpg' },
  { name: 'Sneakers', price: '$60', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/sneakers.jpg',  },
  { name: 'Jacket', price: '$75', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/jacket.jpg',  },
  { name: 'Backpack', price: '$30', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/backpack.jpg',  },
  { name: 'Sunglasses', price: '$15', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/sunglasses.jpg',  },
  { name: 'Watch', price: '$90', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/watch.jpg',  },
  { name: 'Headphones', price: '$50', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/headphones.jpg',  },
  { name: 'Smartphone Case', price: '$10', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/smartphonecase.jpg',  },
  { name: 'Cap', price: '$12', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/cap.jpg',  },
  { name: 'Laptop Sleeve', price: '$25', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/laptopsleeve.jpg' , },
  { name: 'Bluetooth Speaker', price: '$45', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/bluetoothspeake.jpg',  },
  { name: 'Wireless Mouse', price: '$18', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/wirelessmouse.jpg',  },
  { name: 'Notebook', price: '$8', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/notebook.jpg',  },
  { name: 'Desk Lamp', price: '$22', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/desklamp.jpg',  },
  { name: 'Water Bottle', price: '$14', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/waterbottle.jpg', },
  { name: 'Fitness Tracker', price: '$55', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/fitnesstracker.jpg',  },
  { name: 'Phone Charger', price: '$16', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/phonecharger.jpg',  },
  { name: 'Face Mask (5-Pack)', price: '$10', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/facemask.jpg',  },
  { name: 'Hand Sanitizer', price: '$5', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/handsanitizer.jpg',  },
  { name: 'Gaming Keyboard', price: '$60', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/gamingkeyboard.jpg',  },
  { name: 'LED Monitor', price: '$120', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/ledmonitor.jpg',  },
  { name: 'Desk Chair', price: '$80', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/deskchair.jpg',  },
  { name: 'Coffee Mug', price: '$9', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/coffeemug.jpg',  },
  { name: 'Wall Clock', price: '$18', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/wallclock.jpg',  },
  { name: 'Throw Pillow', price: '$15', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/throw pillow.jpg',  },
  { name: 'Blanket', price: '$25', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/blanket.jpg',  },
  { name: 'Candle Set', price: '$12', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/candleset.jpg',  },
  { name: 'Wall Art Print', price: '$30', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/wall art print.jpg',  },
  { name: 'Storage Box', price: '$10', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/storage box.jpg',  },
  { name: 'Hoodie', price: '$35', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/hoodie.jpg',  },
  { name: 'Leggings', price: '$28', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/leggings.jpg',  },
  { name: 'Socks (Pack of 3)', price: '$12', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/socks.jpg',  },
  { name: 'Slippers', price: '$20', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/slippers.jpg',  },
  { name: 'Raincoat', price: '$45', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/raincoat.jpg' , },
  { name: 'Umbrella', price: '$18', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/umbrella.jpg' , },
  { name: 'Duffel Bag', price: '$40', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/duffle bag.jpg',  },
  { name: 'Travel Kit', price: '$22', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/travel kit.jpg',  },
  { name: 'Sunscreen', price: '$8', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/sun screen.jpg',  },
  { name: 'Lip Balm', price: '$3', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/lipbalm.jpg',  },
  { name: 'Toothbrush (Electric)', price: '$30', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/toothbrush.jpg',  },
  { name: 'Shaving Kit', price: '$25', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/shaving kit.jpg',  },
  { name: 'Hair Dryer', price: '$40', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/hair dryer.jpg',  },
  { name: 'Comb Set', price: '$7', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/combset.jpg',  },
  { name: 'Nail Clippers', price: '$5', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/nail slippers.jpg',  },
  { name: 'Sewing Kit', price: '$6', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/sewing kit.jpg',  },
  { name: 'Desk Organizer', price: '$20', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/desk organizer.jpg',  },
  { name: 'Clipboard', price: '$4', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/clip board.png',  },
  { name: 'Pen Set', price: '$6', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/pen set.png',  },
  { name: 'Stapler', price: '$8', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/stapler.jpg',  },
  { name: 'Calendar', price: '$10', image: 'C:/Users/Intel/OneDrive/Desktop/html/vspictures/calender.jpg',  }
];


    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    function addToCart(product) {
        // Check if product already exists in cart
        const existingItem = cart.find(item => item.name === product.name);
        if (!existingItem) {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
        } else {
            alert(`${product.name} is already in your cart!`);
        }
    }

    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" style="width:100%; height:150px; object-fit:cover;">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        `;
        div.querySelector('button').addEventListener('click', () => addToCart(product));
        productList.appendChild(div);
    });
});
