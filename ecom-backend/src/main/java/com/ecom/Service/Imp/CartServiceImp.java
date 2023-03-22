package com.ecom.Service.Imp;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.Exception.ResourceNotFoundException;
import com.ecom.Model.Cart;
import com.ecom.Model.CartItem;
import com.ecom.Model.Product;
import com.ecom.Model.User;
import com.ecom.Repository.CartRepository;
import com.ecom.Repository.ProductRepository;
import com.ecom.Repository.UserRepository;
import com.ecom.Service.CartService;
import com.ecom.payload.CartDto;
import com.ecom.payload.CartItemDto;
import com.ecom.payload.ItemRequest;
import com.ecom.payload.ProductDto;
import com.ecom.payload.ProductResponse;



@Service
public class CartServiceImp implements CartService {
	
		@Autowired
	private   ProductRepository productRepo;
		@Autowired
   private	   UserRepository userRepo;
		@Autowired
	private	CartRepository catRepo;
	@Autowired
		ModelMapper mapper;
	

	@Override
	public CartDto addItem(ItemRequest item, String UserName) {
		             
		         int productId=item.getProductId();
		         int productQuntity=item.getQuantity();
		         
		         User user= this.userRepo.findByEmail(UserName).orElseThrow(() -> new ResourceNotFoundException("User not Found"));
			     Product product= this.productRepo.findById(productId).orElseThrow(()->new ResourceNotFoundException("Product not Found"));
			     
		      if(!product.isStock()){
		    	  new ResourceNotFoundException("Stock is out of Stock");
		      }
		      
		      // create cartItem with product id and Quntity
		      CartItem cartItem=new CartItem();		     
		      cartItem.setProduct(product);
		      cartItem.setQuantity(productQuntity);
		      cartItem.setTotalproductprize();
		      
		      // Getting CartItem from User
		         Cart cart = user.getCart();
	
		         if(cart==null) {
		        	 cart=new Cart();
		        	 cart.setUser(user);
		         }
		        
		         //add items in cart
		    
		         cartItem.setCart(cart);
		         Set<CartItem> items = cart.getIteam();
		         
		         //items.add(cartItem);
		         
		         /*here we Check Item is available in Item table or not 
		          * if item is available then we Increase Quntity else
		          * add new item 
		          * */
		         AtomicReference<Boolean> flag=new AtomicReference<>(false);
		        Set<CartItem> newitem= items.stream().map((i) -> {
		        	
		        	if(i.getProduct().getProductId()==product.getProductId()) {
		        		
		        		i.setQuantity(productQuntity);
		        		i.setTotalproductprize();
		        		flag.set(true);
		        	}
		        	
		        	return i;
		        }).collect(Collectors.toSet());
		        
		        if(flag.get()) {
		        	items.clear();
		        	items.addAll(newitem);
		        	
		        }
		        else {
		        	cartItem.setCart(cart);
					items.add(cartItem);
		        }
		        // iteams.addAll(iteams);
		             
		      Cart updateCart = this.catRepo.save(cart);  
		      
		return this.mapper.map(updateCart,CartDto.class);
	}

	@Override
	public CartDto getCart(String UserName){
		User user = this.userRepo.findByEmail(UserName).orElseThrow(() -> new ResourceNotFoundException("User Not Found"));                 
		Cart cart =  this.catRepo.findByUser(user).orElseThrow(()->new ResourceNotFoundException("Cart Not found"));
	     return this.mapper.map(cart,CartDto.class) ;
	}

	@Override
	public CartDto removeCartItem(String UserName, int productId) {
		User user = this.userRepo.findByEmail(UserName).orElseThrow(() ->new ResourceNotFoundException("User not Found"));
		     Cart cart=user.getCart();
		     Set<CartItem> iteam = cart.getIteam();
		     boolean removeIf = iteam.removeIf((item) ->item.getProduct().getProductId() ==productId);
		       Cart updatecart = this.catRepo.save(cart); 
		       /*remove if remove this iteam due it RelationShip with cartIteam and cart 
		        * not Reflate in database for reflate in databes we have write orphanRemoval = true
		        * in cart  for eg
		        * 
		        * @OneToMany(mappedBy = "cart" ,cascade=CascadeType.ALL,orphanRemoval = true)
	                private Set<CartItem> iteam=new HashSet<>();
		        */
		       
		return this.mapper.map(updatecart,CartDto.class);
	}

}
