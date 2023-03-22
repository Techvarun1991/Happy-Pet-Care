package com.ecom.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.io.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import org.springframework.util.StreamUtils;
import com.ecom.Model.Product;
import com.ecom.Service.FileUpload;
import com.ecom.Service.ProductService;
import com.ecom.Service.Imp.FileUploadImp;
import com.ecom.payload.ApiResponse;
import com.ecom.payload.ProductDto;
import com.ecom.payload.ProductResponse;
import org.springframework.http.MediaType;
import com.ecom.config.AppConstants;

@RestController
@RequestMapping("/")

public class ProductController {

	@Autowired
private FileUploadImp fileUpload;
	@Autowired
private	ProductService productService;
	
@Value("${product.images.path}")
private String imagePath;
	
// upload the product Images

@PostMapping("products/images/{productId}")	
public ResponseEntity<?>uploadImageOfProduct(@PathVariable int productId,
		@RequestParam("product_image") MultipartFile file ) throws Exception{
		System.out.println(productId);
	  ProductDto product = this.productService.getProduct(productId);
	  
		String imageName=null;
		
		try {
			
			 imageName = this.fileUpload.uploadFile(imagePath,file);
			product.setImageName(imageName);
			ProductDto updateProduct= this.productService.updateProduct(productId,product);
			return new ResponseEntity<>(updateProduct,HttpStatus.ACCEPTED);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return new ResponseEntity<>(Map.of("message","File not upload on server"),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	  
	 
	  
	  
	}
	

@GetMapping("/products/images/{productId}")
public void downloadImage(@PathVariable int productId, HttpServletResponse response) throws IOException {
    ProductDto product = this.productService.getProduct(productId);
    String imageName = product.getImageName();
    String fullPath = imagePath + File.separator + imageName;
    InputStream resource = this.fileUpload.getResource(fullPath);
    response.setContentType(MediaType.IMAGE_JPEG_VALUE);
    OutputStream outputStream = response.getOutputStream();
    StreamUtils.copy(resource, outputStream);
}


	
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("categories/{categoryId}/product/")
	public ResponseEntity<ProductDto> createProduct(@RequestBody ProductDto productDto,@PathVariable int categoryId) {
		   
		     ProductDto createProduct = productService.createProduct(productDto,categoryId);
		   
		return new ResponseEntity<ProductDto>(createProduct,HttpStatus.CREATED);
	}
	
	@GetMapping("product/")
	public ProductResponse viewAllProduct(
				
			@RequestParam(value="pageNumber",defaultValue="1",required = false) int pageNumber,
			@RequestParam(value="pageSize",defaultValue="2",required = false) int pageSize,
			@RequestParam(value="sortBy",defaultValue=AppConstants.SORT_BY_STRING ,required=false) String sortBy,
			@RequestParam(value="sortDir",defaultValue = AppConstants.SORT_DIR_STRING,required =false)String sortDir 
			
			){
		   ProductResponse allproduct= productService.getAllProducts(pageNumber,pageSize,sortBy,sortDir);
		return allproduct;
	}
	
	@GetMapping("product/{product_id}")
	public ResponseEntity<ProductDto> getProductById(@PathVariable int product_id) {
		
	      ProductDto productDto=productService.getProduct(product_id);
		
		return new ResponseEntity<ProductDto>(productDto,HttpStatus.OK);
	}
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("product/{product_id}")
	public ResponseEntity<ApiResponse> deleteProduct(@PathVariable int product_id) {
			int a=productService.deleteProduct(product_id);
		
		return new ResponseEntity<ApiResponse>(new ApiResponse("Iteam Deleted",true),HttpStatus.OK);
	}
	
	
	@PutMapping("product/{productId}")
	public ResponseEntity<ProductDto> update(@PathVariable int productId,@RequestBody ProductDto newproduct) {
		
		  ProductDto p=productService.updateProduct(productId, newproduct);
		return new ResponseEntity<ProductDto>(p,HttpStatus.OK);
	}
	
	
	@GetMapping("category/{categoryId}/product")
	public ProductResponse findByCategory(@PathVariable int categoryId,
			 @RequestParam(value="pageSize",defaultValue="2")	  int pageSize,
			 @RequestParam(value="pageNumber",defaultValue="1")   int pageNumber
			){
		
		ProductResponse productByCatgory =  this.productService.getProductByCatgory(categoryId, pageSize,pageNumber);
		return productByCatgory;
	
	}
	
	@GetMapping("product/search/{name}")
	public ResponseEntity<List<ProductDto>> findbyName(@PathVariable String name ){
		
		System.out.print(name);
		List <ProductDto> findProduct = this.productService.findProduct(name);
		
		
		return new ResponseEntity<List<ProductDto>>(findProduct,HttpStatus.OK);
	}

}
