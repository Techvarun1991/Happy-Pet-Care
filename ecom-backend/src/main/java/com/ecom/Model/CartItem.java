package com.ecom.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class CartItem {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int cartIteamId;
	
	 @ManyToOne
	@JsonBackReference
    private Cart cart;
    
	private int quantity;
	
	private double totalproductprize;
	
	@OneToOne
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

	public void setTotalproductprize() {
		this.totalproductprize = this.quantity*this.product.getProductPrize();
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}


}
