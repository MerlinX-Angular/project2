import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        // 86px daliname 5 žvaigždėms
        this.starWidth = this.rating * 86 / 5;
    }

}
