const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});
