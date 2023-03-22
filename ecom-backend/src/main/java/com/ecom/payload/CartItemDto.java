package com.ecom.payload;



import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.ecom.Model.Cart;
import com.ecom.Model.Product;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class CartItemDto {
	private int cartIteamId;
	
	
   private Cart cart;
	private int quantity;
	private double totalproductprize;
	private Product product;
	public int getCartIteamId() {
		return cartIteamId;
	}
	public void setCartIteamId(int cartIteamId) {
		this.cartIteamId = cartIteamId;
	}
	public Cart getCart() {
		return cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getTotalproductprize() {
		return totalproductprize;
	}
	public void setTotalproductprize(double totalproductprize) {
		this.totalproductprize = totalproductprize;
	}
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	
	


}
