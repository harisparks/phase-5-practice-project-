import { Component } from '@angular/core';
@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
 cartItemCount: number = 0;
 addToCart(productName: string): void {
 // Perform the logic to add the product to the cart
 // For demonstration purposes, we'll simply increment the cart item count
 this.cartItemCount++;
 }
}
