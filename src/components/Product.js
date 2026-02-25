// Product.js
class Product {
  calculatePrice() {
    return this.basePrice + this.getTax();
  }
  
  getTax() {
    return this.basePrice * this.taxRate;
  }
}

// pricing.js
export const calculateTotal = (items) => {
  return items.reduce((sum, item) => {
    return sum + item.calculatePrice() * (1 + getTax());
  }, 0);
};