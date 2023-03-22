package com.ecom.payload;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.ecom.Model.Category;

public class ProductDto {
	
	@NotEmpty
	@Size(min=0,message="Id should be Greater then 0")
	private int    productId;
	@Pattern(regexp="/^[A-Z]-[A-Z]{3,5}\\/[\\d]{2}\\/[\\d]{3}$/")
	private String productName;
	@NotEmpty
	private String productDesc;
	@Size(min=0,message="prize Should be greater than 0")
	@NotEmpty
	private double productPrize;
	private boolean stock;
	@Size(min=1 ,message="Quntity must Should  be greater 0")
	private int productQuantity;
	private boolean live;
	private String imageName;
	private Category category;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public double getProductPrize() {
		return productPrize;
	}
	public void setProductPrize(double productPrize) {
		this.productPrize = productPrize;
	}
	public boolean isStock() {
		return stock;
	}
	public void setStock(boolean stock) {
		this.stock = stock;
	}
	public int getProductQuantity() {
		return productQuantity;
	}
	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}
	public boolean isLive() {
		return live;
	}
	public void setLive(boolean live) {
		this.live = live;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public ProductDto(@NotEmpty @Size(min = 0, message = "Id should be Greater then 0") int productId,
			@Pattern(regexp = "/^[A-Z]-[A-Z]{3,5}\\/[\\d]{2}\\/[\\d]{3}$/") String productName,
			@NotEmpty String productDesc,
			@Size(min = 0, message = "prize Should be greater than 0") @NotEmpty double productPrize, boolean stock,
			@Size(min = 1, message = "Quntity must Should  be greater 0") int productQuantity, boolean live,
			String imageName) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productDesc = productDesc;
		this.productPrize = productPrize;
		this.stock = stock;
		this.productQuantity = productQuantity;
		this.live = live;
		this.imageName = imageName;
	}
	public ProductDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	
	
	
	
	

}
