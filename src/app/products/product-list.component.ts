import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{

    pageTitle = 'Products List'
    imageWidth = 60;
    imageHeight = 40;
    showImage = false;

    filteredProducts: IProduct[] = [];
    products: IProduct[] = [];
    errorMessage: string = '';
    sub!: Subscription;
    
    private _listFilter = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
    }


    constructor(private productService: ProductService) {}



    ngOnInit(): void {
      this.sub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = products;
            },
            error: err => this.errorMessage = err
        });
        this.filteredProducts = this.products;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
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