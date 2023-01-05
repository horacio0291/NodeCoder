class ProductManager {
  products;

  constructor() {
    this.products = [];
  }

  isInCart = (code) =>
    this.products.find((product) => product.code === code) ? true : false; 
    //Verificca si el codigo ya esta cargado en el array

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.isInCart(code)) {
      return;
    //Si la respuesta de la funcion inInCart es true quiere decir que el codigo ya esta cargado en el array
    }

    this.products.push({
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    });
  }

  getProducts() {
    return(this.products);
  }

  getProductById(id) {
    if (this.products.find((product) => product.id === id)) {
      return(this.products.find((product) => product.id === id));
    } else {
      return("Not Found");
    }
  }
}

const productos = new ProductManager();

productos.addProduct("pizza", "Comida", 100, "\ruta", 12345, 10);
productos.addProduct("hamburguesa", "Comida", 1000, "\ruta", 12345, 10);
productos.addProduct("ensalada", "Comida", 200, "\ruta", 123456, 10);
productos.addProduct("tostadas", "Comida", 500, "\ruta", 123456, 10);




console.table(productos.getProducts());
console.log(productos.getProductById(1));
