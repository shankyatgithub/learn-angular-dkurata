import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
    selector: 'shanks-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit{
@Input() rating: number = 0;;
    cropWidth: number = 75;

@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.applyStars();
    }

    ngOnInit(): void {
        this.applyStars();
    }

    applyStars()
    {
        this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
        console.log(`The rating ${this.rating} was click`);
        this.ratingClicked.emit(`${this.rating.toString()} was clicked`);
    }
    
}