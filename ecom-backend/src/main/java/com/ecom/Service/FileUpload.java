package com.ecom.Service;

import java.io.FileNotFoundException;
import java.io.InputStream;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
public interface FileUpload {
	
	
	//create a file on server at given
	String uploadFile(String path,MultipartFile file) throws Exception;
	
	//get the resource 
	InputStream getResource(String path) throws FileNotFoundException;
	
	//delete file
	void deleteFile(String file);

}
