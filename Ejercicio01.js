class ProductManager {
  products;

  constructor() {
    this.products = [];
  }

  isInCart = (code) =>
    this.products.find((product) => product.code === code) ? true : false;

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.isInCart(code)) {
      return;
      //Si la respuesta de la funcion inInCart es true quiere decir que el codigo ya esta cargado en el array
    }
    if (title && description && price && thumbnail && code && stock) {
      this.products.push({
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
    } else {
      console.log("Complete all fields");
    }
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      return "Not found";
    }
    return product;
  }
}

const productos = new ProductManager();

productos.addProduct("pizza", "comida", 100, "\ruta", 12345, 10);
productos.addProduct("hamburguesa", "Comida", 1000, "\ruta", 12345, 20);
productos.addProduct("ensalada", "Comida", 200, "\ruta", 123456, 30);
productos.addProduct("tostadas", "Comida", 500, "\ruta", 123456, 40);

console.table(productos.getProducts());
console.log(productos.getProductById(888));
