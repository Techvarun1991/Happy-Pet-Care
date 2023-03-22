package com.ecom.Model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cartId;
	@JsonManagedReference
	@OneToMany(mappedBy = "cart" ,cascade=CascadeType.ALL,orphanRemoval = true)
	private Set<CartItem> iteam=new HashSet<>();
	
	   @OneToOne
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
