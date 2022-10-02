import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'shanks-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{

    pageTitle = 'Products List'
    imageWidth = 60;
    imageHeight = 40;
    showImage = false;
    
    private _listFilter = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];

    /*products: IProduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          }
    ];*/

    
    /**
     *
     */
    constructor(private productService: ProductService) {}



    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    toogleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
    }

    onRatingClicked(message: string):void{
        this.pageTitle = message;
    }
}