class Product {
  calculatePrice() {
    const priceWithDiscount = this.basePrice - this.getDiscount();
    return priceWithDiscount + this.getTax(priceWithDiscount);
  }
  
  getDiscount() {
    return this.basePrice * this.discountRate;
  }
  
  getTax(priceAfterDiscount) {
    return priceAfterDiscount * this.taxRate;
  }
}