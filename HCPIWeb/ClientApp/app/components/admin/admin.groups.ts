import { Component } from '@angular/core';

@Component({
    selector: 'groups',
    templateUrl: './admin.groups.html'
})
export class GroupsComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
