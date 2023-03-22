package com.ecom.Service.Imp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ecom.Exception.ResourceNotFoundException;
import com.ecom.Model.Role;
import com.ecom.Model.User;
import com.ecom.Repository.RoleRepository;
import com.ecom.Repository.UserRepository;
import com.ecom.Service.UserService;
import com.ecom.payload.ForgotPassDto;
import com.ecom.payload.UserDto;
@Service
public class UserServiceImp implements UserService {
	
	@Autowired
	private UserRepository userRepositroy;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public UserDto create(UserDto userDto) {
		  User user=this.toEntity(userDto);
		        
		  Role role = this.roleRepository.findById(7412).get();
		  user.getRoles().add(role);
		  User userCreate=this.userRepositroy.save(user);
	
		return this.toDto(userCreate);
	}
	
	
	@Override
	public UserDto update(UserDto t, int userId) {
		User u=userRepositroy.findById(userId).orElseThrow(()->new ResourceNotFoundException("User not found by this id"));
		u.setPhone(t.getPhone());
		u.setPassword(t.getPassword());
		u.setName(t.getName());
		u.setGender(t.getGender());
		u.setEmail(t.getEmail());
		u.setDate(t.getDate());
		u.setAddress(t.getAddress());
		u.setActive(t.isActive());
		User Updateuser=this.userRepositroy.save(u);
		return this.toDto(Updateuser);
	}

	@Override
	public void delete(int userId) {
		User u=userRepositroy.findById(userId).orElseThrow(() ->new ResourceNotFoundException("UserId not Found"));
		        userRepositroy.delete(u);
	
	}

	@Override
	public List<UserDto> getAll() {
	        List<User> alluser=userRepositroy.findAll();	
		               List<UserDto> allUserDto=alluser.stream().map(user -> this.toDto(user)).collect(Collectors.toList());
		
		return allUserDto;
	}

	@Override
	public UserDto getByUserId(int userId) {
				User finduser=userRepositroy.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User Not Found"+userId));
		          
				return this.toDto(finduser); 
	}

	@Override
	public UserDto getByEmailId(String emailId) {
		       User findemail=userRepositroy.findByEmail(emailId).orElseThrow(() -> new ResourceNotFoundException("User Email Is is Not Exit"+emailId));
		return this.toDto(findemail);
	}
	@Autowired
	private ModelMapper mapper;
	public UserDto toDto(User u) {
		return this.mapper.map(u,UserDto.class);
	}
	
public User toEntity(UserDto dto) {
	return this.mapper.map(dto,User.class);
}


@Override
public boolean changePassword(ForgotPassDto passDto) {
	// TODO Auto-generated method stub
	
	try {
		String pass=passwordEncoder.encode(passDto.getPassword());
		passDto.setPassword(pass);
		System.out.println("changePassword"+pass);
		System.out.println("changePassword"+passDto.getEmail());
		// TODO Auto-generated method stub
		//userDao.saveAll(dto);
		userRepositroy.ChangePassFromEmail(passDto.getEmail(),pass);
		System.out.println("changePassword"+pass);
		System.out.println("changePassword"+passDto.getEmail());
		return true;
	}
	catch(Exception e) {
		e.printStackTrace();
		return false;
	}
}
}
