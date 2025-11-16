(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
    }

    class MailerService {

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailerService: MailerService;

        constructor( productService: ProductService, mailerService: MailerService ) {
            this.productService = productService;
            this.mailerService = mailerService;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailerService.notifyClients();
        }
    
    
    }

    class CartBloc {

        private itemsInCart: number[] = [];

        onAddToCart( productId: number ) {
            console.log('Agregando al carrito el producto ', productId );
        }

    }

    const productService = new ProductService();
    const mailerService = new MailerService();

    const productBloc = new ProductBloc(productService, mailerService);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);







})();