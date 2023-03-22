package com.ecom.payload;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.ecom.Model.CartItem;
import com.ecom.Model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class CartDto {

private int cartId;
  
	private Set<CartItem> iteam=new HashSet<>();
	@JsonIgnore
	 private  User user;

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public Set<CartItem> getIteam() {
		return iteam;
	}

	public void setIteam(Set<CartItem> iteam) {
		this.iteam = iteam;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	 

	
    	
	



}
