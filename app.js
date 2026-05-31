// ===== IMAGE PATHS =====
// 👇 Paste your own image URLs here (right-click any Google image → "Copy image address")
const IMG = {
  Mustang: 'https://tse1.mm.bing.net/th/id/OIP.ral5twdylTHXYcJ17GG1qgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',       // Ford Mustang
  audi_rs7: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',       // Audi RS7
  mercedes_benz: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',       // Mercedes-Benz GLE
  porsche_911: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',       // Porsche 911
  tesla_model_s: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',          // Tesla Model S
  tesla_model_x: 'https://st.automobilemag.com/uploads/sites/11/2017/01/Unplugged-Performance-2016-Tesla-Model-X-90D.jpg',          // Tesla Model X
  bmw_m5: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',          // BMW M5
  ferrari_roma: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',       // Ferrari Roma
  lamborghini_urus: 'https://tse2.mm.bing.net/th/id/OIP.uc6bGItr8ng1L-fQUxTzrgHaEK?w=1600&h=900&rs=1&pid=ImgDetMain&o=7&rm=3',         // Lamborghini Urus
  bmw_x7: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80',          // BMW X7
  mercedes_amg: 'https://tse3.mm.bing.net/th/id/OIP.6gmaf0PVBbmgkqa3F1-MzwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',       // Mercedes AMG GT
  tesla_model_x2: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800&q=80',         // Tesla Model X (2)
};



// ===== CAR DATA =====
const CARS = [
  { id: 0, name: 'Mustang', brand: 'Ford', category: 'luxury', fuel: 'Petrol', price: 8000000, rating: 4.9, badge: 'Featured', img: IMG.Mustang, engine: '5.0L V8', power: '450 HP', transmission: 'Automatic', mileage: '8.5 km/l', desc: 'The Ford Mustang is an legendary muscle car featuring a roaring V8 engine, stunning retro-futuristic looks, and high-adrenaline performance.' },
  { id: 1, name: 'Tesla Model X', brand: 'Tesla', category: 'electric', fuel: 'Electric', price: 11000000, rating: 4.8, badge: '', img: IMG.tesla_model_x, engine: 'Dual Motor', power: '670 HP', transmission: 'Automatic', mileage: '6.2 km/kWh', desc: 'The Tesla Model X is an all-electric luxury SUV offering futuristic falcon-wing doors, panoramic windshield, and advanced autopilot tech.' },
  { id: 2, name: 'Mercedes-Benz GLE', brand: 'Mercedes-Benz', category: 'suv', fuel: 'Petrol', price: 9640000, rating: 4.7, badge: '', img: IMG.mercedes_benz, engine: '3.0L V6', power: '362 HP', transmission: 'Automatic', mileage: '11.2 km/l', desc: 'The Mercedes-Benz GLE is a masterclass in premium SUV comfort and space, offering a cutting-edge cockpit and superior driving mechanics.' },
  { id: 3, name: 'Audi RS7', brand: 'Audi', category: 'luxury', fuel: 'Petrol', price: 17200000, rating: 4.9, badge: 'Performance', img: IMG.audi_rs7, engine: '4.0L V8 Twin-Turbo', power: '591 HP', transmission: '8-Speed Auto', mileage: '9.8 km/l', desc: 'The Audi RS7 Sportback is a gorgeous, high-performance sedan offering supercar speed with a spacious premium five-door layout.' },
  { id: 4, name: 'Porsche 911 Carrera', brand: 'Porsche', category: 'luxury', fuel: 'Petrol', price: 19900000, rating: 4.8, badge: '', img: IMG.porsche_911, engine: '3.0L Twin-Turbo', power: '450 HP', transmission: 'PDK', mileage: '11.5 km/l', desc: 'The Porsche 911 Carrera is a timeless sports car that has defined driving excellence for over five decades. Its rear-engine layout, precise handling, and iconic design continue to set the benchmark for sports car perfection.' },
  { id: 5, name: 'Tesla Model S', brand: 'Tesla', category: 'electric', fuel: 'Electric', price: 13900000, rating: 4.8, badge: 'Electric', img: IMG.tesla_model_s, engine: 'Dual Motor', power: '670 HP', transmission: 'Single Speed', mileage: '6.1 km/kWh', desc: 'The Tesla Model S Plaid is the world\'s fastest production sedan. With a 0-100 km/h time of under 2.1 seconds, 1,020 HP, and an autopilot system, it represents the pinnacle of electric vehicle technology.' },
  { id: 6, name: 'BMW M5 Competition', brand: 'BMW', category: 'sedan', fuel: 'Petrol', price: 16500000, rating: 4.9, badge: 'Performance', img: IMG.bmw_m5, engine: '4.4L V8', power: '625 HP', transmission: '8-Speed Auto', mileage: '10.2 km/l', desc: 'The BMW M5 Competition is the ultimate performance sedan. Its twin-turbocharged V8 produces 625 HP, propelling it from 0-100 km/h in 3.3 seconds while still offering a luxurious everyday driving experience.' },
  { id: 7, name: 'Ferrari Roma', brand: 'Ferrari', category: 'luxury', fuel: 'Petrol', price: 38500000, rating: 5.0, badge: 'Exotic', img: IMG.ferrari_roma, engine: '3.9L V8 Turbo', power: '612 HP', transmission: '8-Speed DCT', mileage: '9.8 km/l', desc: 'The Ferrari Roma is a beautiful gran turismo that embodies La Nuova Dolce Vita. Its powerful turbocharged V8, stunning design, and exceptional performance make it one of the most desirable Ferraris ever created.' },
  { id: 8, name: 'Lamborghini Urus', brand: 'Lamborghini', category: 'suv', fuel: 'Petrol', price: 42000000, rating: 4.9, badge: 'Super SUV', img: IMG.lamborghini_urus, engine: '4.0L V8 Turbo', power: '650 HP', transmission: '8-Speed Auto', mileage: '8.1 km/l', desc: 'The Lamborghini Urus is the world\'s first Super SUV. It combines a Lamborghini\'s iconic performance and design with the practicality of an SUV, delivering 0-100 km/h in 3.6 seconds and a top speed of 305 km/h.' },
  { id: 9, name: 'BMW X7', brand: 'BMW', category: 'suv', fuel: 'Diesel', price: 12200000, rating: 4.7, badge: '', img: IMG.bmw_x7, engine: '3.0L Diesel', power: '265 HP', transmission: '8-Speed Auto', mileage: '13.1 km/l', desc: 'The BMW X7 is BMW\'s flagship full-size luxury SUV. With seven seats, a commanding presence, and a plush interior, it offers the perfect blend of practicality and prestige for those who demand the very best.' },
  { id: 10, name: 'Mercedes-AMG GT', brand: 'Mercedes-Benz', category: 'luxury', fuel: 'Petrol', price: 22800000, rating: 4.9, badge: 'AMG', img: IMG.mercedes_amg, engine: '4.0L V8 Biturbo', power: '557 HP', transmission: '7-Speed DCT', mileage: '10.5 km/l', desc: 'The Mercedes-AMG GT is a pure sports car with an emotional design that reflects the car\'s performance. Its hand-built AMG V8 engine delivers 557 HP and a soundtrack that will make your heart race.' },
  { id: 11, name: 'tesla model X', brand: 'Tesla', category: 'electric', fuel: 'Electric', price: 11000000, rating: 4.8, badge: '', img: IMG.tesla_model_x, engine: 'Dual Motor', power: '670 HP', transmission: 'Automatic', mileage: '6.2 km/kWh', desc: 'The Tesla Model X is an all-electric luxury SUV offering futuristic falcon-wing doors, panoramic windshield, and advanced autopilot tech.' },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('drivex_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('drivex_wish') || '[]');
let activeCategory = 'all';
let filteredCars = [...CARS];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCars(CARS);
  updateBadges();
});

// ===== FORMAT PRICE =====
function fmtPrice(n) {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return '₹' + n.toLocaleString('en-IN');
}

// ===== RENDER CARS =====
function renderCars(list) {
  const grid = document.getElementById('carsGrid');
  const noRes = document.getElementById('noResults');
  grid.innerHTML = '';
  if (!list.length) { noRes.style.display = 'block'; return; }
  noRes.style.display = 'none';
  list.forEach(car => {
    const inWish = wishlist.includes(car.id);
    const div = document.createElement('div');
    div.className = 'car-card';
    div.innerHTML = `
      <div class="card-img-wrap">
        <img src="${car.img}" alt="${car.name}" onerror="this.src='https://placehold.co/300x180/0e1128/7c3aed?text=${encodeURIComponent(car.name)}'"/>
        ${car.badge ? `<span class="card-badge">${car.badge}</span>` : ''}
        <button class="card-wish ${inWish ? 'active' : ''}" id="wish-${car.id}" onclick="toggleWishlist(${car.id},event)">
          ${inWish ? '♥' : '♡'}
        </button>
      </div>
      <div class="card-body">
        <h3>${car.name}</h3>
        <p class="card-type">${car.brand} · ${car.category.charAt(0).toUpperCase() + car.category.slice(1)} · ${car.fuel}</p>
        <div class="card-row">
          <span class="card-price">${fmtPrice(car.price)}</span>
          <span class="card-rating"><span class="star">★</span>${car.rating}</span>
        </div>
        <div class="card-actions">
          <button class="btn-cart" onclick="addToCart(${car.id})">🛒 Add to Cart</button>
          <button class="btn-buy" onclick="buyNow(${car.id})">Buy Now</button>
        </div>
      </div>`;
    div.querySelector('.card-img-wrap').addEventListener('click', (e) => {
      if (!e.target.closest('.card-wish')) openCarDetail(car.id);
    });
    grid.appendChild(div);
  });
}

// ===== FILTERS =====
function setCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function applyFilters() {
  const brand = document.getElementById('brandFilter').value;
  const minP = parseInt(document.getElementById('minPrice').value) || 0;
  const maxP = parseInt(document.getElementById('maxPrice').value) || 999999999;
  const fuel = document.getElementById('fuelFilter').value;
  const search = document.getElementById('globalSearch').value.toLowerCase().trim();

  filteredCars = CARS.filter(c => {
    const catOk = activeCategory === 'all' || c.category === activeCategory;
    const brandOk = !brand || c.brand === brand;
    const priceOk = c.price >= minP && c.price <= maxP;
    const fuelOk = !fuel || c.fuel === fuel;
    const searchOk = !search || c.name.toLowerCase().includes(search) || c.brand.toLowerCase().includes(search) || c.category.toLowerCase().includes(search);
    return catOk && brandOk && priceOk && fuelOk && searchOk;
  });

  const title = brand ? `${brand} Cars` : (activeCategory === 'all' ? 'All Cars' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1) + 's');
  document.getElementById('sectionTitle').textContent = filteredCars.length + ' ' + title + ' Found';
  renderCars(filteredCars);
  document.getElementById('carsSection').scrollIntoView({ behavior: 'smooth' });
}

function clearFilters() {
  activeCategory = 'all';
  document.getElementById('brandFilter').value = '';
  document.getElementById('minPrice').value = '0';
  document.getElementById('maxPrice').value = '999999999';
  document.getElementById('fuelFilter').value = '';
  document.getElementById('globalSearch').value = '';
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  document.getElementById('sectionTitle').textContent = 'Top Picks For You';
  renderCars(CARS);
}

function filterByBrand(brand) {
  document.getElementById('brandFilter').value = brand;
  applyFilters();
}

// ===== SEARCH =====
function handleSearch(val) {
  const dd = document.getElementById('searchDropdown');
  if (!val.trim()) { dd.classList.remove('open'); dd.innerHTML = ''; return; }
  const q = val.toLowerCase();
  const results = CARS.filter(c => c.name.toLowerCase().includes(q) || c.brand.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)).slice(0, 5);
  if (!results.length) { dd.classList.remove('open'); dd.innerHTML = ''; return; }
  dd.innerHTML = results.map(c => `
    <div class="search-item" onclick="openCarDetail(${c.id}); document.getElementById('searchDropdown').classList.remove('open');">
      <img src="${c.img}" alt="${c.name}" onerror="this.src='https://placehold.co/60x40/0e1128/7c3aed?text=Car'"/>
      <div class="search-item-info"><strong>${c.name}</strong><p>${fmtPrice(c.price)}</p></div>
    </div>`).join('');
  dd.classList.add('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-bar')) document.getElementById('searchDropdown').classList.remove('open');
});

function showSection(s) {
  if (s === 'electric') { setCategory('electric', document.querySelector('[data-cat="electric"]')); }
  else if (s === 'cars' || s === 'home') { clearFilters(); }
  else if (s === 'categories') { document.querySelector('.brands-section').scrollIntoView({ behavior: 'smooth' }); }
  else if (s === 'brands') { document.querySelector('.brands-section').scrollIntoView({ behavior: 'smooth' }); }
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
}

// ===== CART =====
function saveCart() { localStorage.setItem('drivex_cart', JSON.stringify(cart)); }

function addToCart(id) {
  const exists = cart.find(i => i.id === id);
  if (exists) { exists.qty++; }
  else { cart.push({ id, qty: 1 }); }
  saveCart();
  updateBadges();
  showToast('Added to cart 🛒');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateBadges();
  renderCartItems();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateBadges();
  renderCartItems();
}

function renderCartItems() {
  const wrap = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const empty = document.getElementById('emptyCart');
  if (!cart.length) {
    wrap.innerHTML = '<div class="empty-cart"><div style="font-size:3rem">🚗</div><p>Your cart is empty</p><small>Add cars to get started</small></div>';
    footer.style.display = 'none';
    return;
  }
  footer.style.display = 'block';
  let total = 0;
  wrap.innerHTML = cart.map(item => {
    const car = CARS.find(c => c.id === item.id);
    if (!car) return '';
    total += car.price * item.qty;
    return `<div class="cart-item">
      <img src="${car.img}" alt="${car.name}" onerror="this.src='https://placehold.co/80x55/0e1128/7c3aed?text=Car'"/>
      <div class="ci-info">
        <h4>${car.name}</h4>
        <p>${fmtPrice(car.price)}</p>
        <div class="ci-controls">
          <button class="qty-btn" onclick="changeQty(${car.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${car.id},1)">+</button>
        </div>
      </div>
      <button class="ci-remove" onclick="removeFromCart(${car.id})">🗑</button>
    </div>`;
  }).join('');
  document.getElementById('cartTotal').textContent = fmtPrice(total);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  const isOpen = sidebar.classList.contains('open');
  if (!isOpen) {
    document.getElementById('wishlistPanel').style.right = '-420px';
    renderCartItems();
    sidebar.classList.add('open');
    overlay.classList.add('open');
  } else {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  }
}

function buyNow(id) {
  addToCart(id);
  openCheckout();
}

function updateBadges() {
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = cartCount;
  badge.style.display = cartCount ? 'flex' : 'none';

  const wBadge = document.getElementById('wishlistBadge');
  wBadge.textContent = wishlist.length;
  wBadge.style.display = wishlist.length ? 'flex' : 'none';
}

// ===== WISHLIST =====
function saveWishlist() { localStorage.setItem('drivex_wish', JSON.stringify(wishlist)); }

function toggleWishlist(id, e) {
  e.stopPropagation();
  const idx = wishlist.indexOf(id);
  if (idx === -1) { wishlist.push(id); showToast('Added to wishlist ♥'); }
  else { wishlist.splice(idx, 1); showToast('Removed from wishlist'); }
  saveWishlist();
  updateBadges();
  renderCars(filteredCars);
  if (document.getElementById('wishlistPanel').style.right === '0px') renderWishlistItems();
}

function renderWishlistItems() {
  const wrap = document.getElementById('wishlistItems');
  if (!wishlist.length) {
    wrap.innerHTML = '<div class="empty-cart"><div style="font-size:3rem">♡</div><p>No wishlist items</p></div>';
    return;
  }
  wrap.innerHTML = wishlist.map(id => {
    const car = CARS.find(c => c.id === id);
    if (!car) return '';
    return `<div class="cart-item">
      <img src="${car.img}" alt="${car.name}" onerror="this.src='https://placehold.co/80x55/0e1128/7c3aed?text=Car'"/>
      <div class="ci-info">
        <h4>${car.name}</h4>
        <p>${fmtPrice(car.price)}</p>
        <div class="ci-controls" style="gap:.4rem;margin-top:.5rem">
          <button class="qty-btn" style="width:auto;padding:0 .6rem" onclick="addToCart(${car.id})">Add to Cart</button>
        </div>
      </div>
      <button class="ci-remove" onclick="toggleWishlist(${car.id},{stopPropagation:()=>{}})">✕</button>
    </div>`;
  }).join('');
}

function toggleWishlistPanel() {
  const panel = document.getElementById('wishlistPanel');
  const overlay = document.getElementById('overlay');
  const isOpen = panel.style.right === '0px';
  if (!isOpen) {
    document.getElementById('cartSidebar').classList.remove('open');
    renderWishlistItems();
    panel.style.right = '0px';
    overlay.classList.add('open');
  } else {
    panel.style.right = '-420px';
    overlay.classList.remove('open');
  }
}

function closeAll() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('wishlistPanel').style.right = '-420px';
  document.getElementById('overlay').classList.remove('open');
}

// ===== CAR DETAIL MODAL =====
function openCarDetail(id) {
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-grid">
      <div class="modal-img"><img src="${car.img}" alt="${car.name}" onerror="this.src='https://placehold.co/400x280/0e1128/7c3aed?text=${encodeURIComponent(car.name)}'"/></div>
      <div class="modal-info">
        <p class="modal-brand">${car.brand}</p>
        <h2>${car.name}</h2>
        <div class="modal-price">${fmtPrice(car.price)}</div>
        <div class="modal-specs">
          <div class="ms-item"><span>Engine</span>${car.engine}</div>
          <div class="ms-item"><span>Power</span>${car.power}</div>
          <div class="ms-item"><span>Transmission</span>${car.transmission}</div>
          <div class="ms-item"><span>Mileage</span>${car.mileage}</div>
          <div class="ms-item"><span>Fuel Type</span>${car.fuel}</div>
          <div class="ms-item"><span>Category</span>${car.category.charAt(0).toUpperCase() + car.category.slice(1)}</div>
        </div>
        <div class="modal-actions">
          <button class="btn-cart" onclick="addToCart(${car.id});showToast('Added to cart')">🛒 Add to Cart</button>
          <button class="btn-buy" onclick="buyNow(${car.id});closeCarDetail()">Buy Now</button>
        </div>
      </div>
      <div class="modal-desc">${car.desc}</div>
    </div>`;
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCarDetail() {
  document.getElementById('carModal').classList.remove('open');
  document.body.style.overflow = '';
}

// ===== CHECKOUT =====
function openCheckout() {
  closeAll();
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  let total = 0;
  let summary = cart.map(item => {
    const car = CARS.find(c => c.id === item.id);
    if (!car) return '';
    total += car.price * item.qty;
    return `<div class="checkout-summary-item">
      <img src="${car.img}" alt="${car.name}" onerror="this.src='https://placehold.co/64x44/0e1128/7c3aed?text=Car'"/>
      <div><strong>${car.name}</strong><br/><small style="color:#8892a4">${fmtPrice(car.price)} × ${item.qty}</small></div>
    </div>`;
  }).join('');
  document.getElementById('checkoutSummary').innerHTML = summary;
  document.getElementById('checkoutTotal').textContent = fmtPrice(total);
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function placeOrder() {
  const name = document.getElementById('ckName').value.trim();
  const email = document.getElementById('ckEmail').value.trim();
  const phone = document.getElementById('ckPhone').value.trim();
  const address = document.getElementById('ckAddress').value.trim();
  if (!name || !email || !phone || !address) { showToast('Please fill all fields!'); return; }
  closeCheckout();
  cart = [];
  saveCart();
  updateBadges();
  document.getElementById('successModal').classList.add('open');
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('open');
  document.body.style.overflow = '';
}

function openSignin() { showToast('Sign In feature coming soon!'); }

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 50 ? 'rgba(5,6,15,0.98)' : 'rgba(5,6,15,0.85)';
});
