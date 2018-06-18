import { Component } from '@angular/core';

@Component({
    selector: 'admin-accessroles',
    templateUrl: './admin.accessroles.html'
})
export class AccessRolesComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
