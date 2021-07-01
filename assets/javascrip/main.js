var productsApi = 'http://localhost:3000/products'

function start() {
    getProducts(renderProducts);
}

// chạy ứng dụng
start();

// function
function getProducts(callback) {
    fetch(productsApi)
        .then(response => response.json())
        .then(callback);
}



function renderProducts(products) {
    var listProductsBlock = document.querySelector('#product-list');
    var htmls = products.map(product => `
    <div class="col l-2-4 m-4 c-12">
        <a class="product-item" href="#">
            <div class="product-item__img" style="background-image: url(${product.image});"></div>
            <h4 class="product-item__name">${product.name}</h4>
            <div class="product-item__price">
                <span class="product-item__price-old">1.200.000đ</span>
                <span class="product-item__price-current">${product.price}đ</span>
            </div>
            <div class="product-item__action">
                <!-- product-item__like--liked: Hiện tim  -->
                <span class="product-item__like product-item__like--liked ">
                    <i class="far fa-heart like-icon-empty"></i>
                    <i class="like-icon-fill fas fa-heart"></i>
                </span>
                <div class="product-item__rating">
                    <i class="product-item__star--gold fas fa-star"></i>
                    <i class="product-item__star--gold fas fa-star"></i>
                    <i class="product-item__star--gold fas fa-star"></i>
                    <i class="product-item__star--gold fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <span class="produc-item__sold">${product.quantity} đã bán</span>
            </div>
            <div class="product-item__origin">
                <span class="product-item__brand">Whoo</span>
                <span class="product-item__origin-name">Nhật Bản</span>
            </div>
            <div class="product-item__favourite">
                <i class="fas fa-check"></i>
                <span>Yêu thích</span>
            </div>
            <div class="product-item__sele-off">
                <span class="product-item__sele-off-precent">10%</span>
                <span class="product-item__sele-off-label">GIẢM</span>
            </div>
        </a>
    </div>
    `)
    listProductsBlock.innerHTML = htmls.join('')
}