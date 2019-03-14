import { Component, Input, OnInit } from '@angular/core';
@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {
	@Input() message = `Information`;
	@Input() type = 'alert-success';

	constructor() {}

	ngOnInit() {}
}
