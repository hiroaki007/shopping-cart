// カートに追加された商品の情報を管理するオブジェクト
const cart = {};

// 商品リスト内の「カートに追加」ボタンを取得
const addtToCartButtons = document.querySelectorAll('.add-to-cart');

// カート関連の要素
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// 合計金額を管理
let totalPrice = 0;

// 「カートに追加」ボタンがクリックされたときの処理

addtToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const productElement = event.target.parentElement;
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseInt(productElement.getAttribute('data-price'));
        
        // 商品がすでにカートにある場合、数量を増やす
        if(cart[productName]) {
            cart[productName].quantity += 1;
            const existingItem = document.querySelector(`[data-cart-item="${productName}"]`);
            existingItem.textContent = `${productName} - ¥${productPrice} x ${cart[productName].quantity}`;
        } else {
             // 商品がカートにない場合、新しい項目を作成
            cart[productName] = {
                price: productPrice,
                quantity: 1
            };
            
            const cartItem = document.createElement('li');
            cartItem.setAttribute('data-cart-item', productName);
            cartItem.textContent = `${productName} - ¥${productPrice}`;
            cartItems.appendChild(cartItem);
        }


        // 合計金額を更新
        totalPrice += productPrice;
        totalPriceElement.textContent = totalPrice;

    });
});