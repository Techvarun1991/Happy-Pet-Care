package com.ecom.Service.Imp;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.ecom.Service.FileUpload;

@Service
public class FileUploadImp implements FileUpload{

	@Override
	public String uploadFile(String path, MultipartFile file) throws IOException{
		
		  String fullPath;
		String originalFilename = file.getOriginalFilename();
		/*
		   * if use this then it is plateform indepands 
		   * because of linux sperator is // 
		   * and window sperator is /  
		   *                          */
			//String fullPath=path +"/"+originalFilename;
			
			//File.separator
		
		
		
		          String RandomImageName=UUID.randomUUID().toString();
		          String RandomImageNameWithExtenstion= RandomImageName.concat(originalFilename.substring(originalFilename.lastIndexOf(".")));
		          //fullPath=path+File.separator+originalFilename;
		          fullPath=path+File.separator+RandomImageNameWithExtenstion;
		     File folderFile=new File(path);
		     
		     if(!folderFile.exists()) {
		    	 folderFile.mkdirs();
		     }
			Files.copy(file.getInputStream(),Paths.get(fullPath));
		
		return RandomImageNameWithExtenstion;
    }

	

	@Override
	public InputStream getResource(String path) throws FileNotFoundException {
		   InputStream is=new FileInputStream(path);
	        return is;
	}

	@Override
	public void deleteFile(String file) {
		// TODO Auto-generated method stub
		
	}

}
