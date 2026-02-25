// Product.js
class Product {
  calculatePrice() {
    return this.basePrice - this.getDiscount();
  }
  
  getDiscount() {
    return this.basePrice * this.discountRate;
  }
}

// pricing.js
export const calculateTotal = (items) => {
  return items.reduce((sum, item) => {
    return sum + item.calculatePrice();
  }, 0);
};