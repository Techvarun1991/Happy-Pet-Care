package com.ecom.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.Service.UserService;
import com.ecom.Service.Imp.EmailService;
import com.ecom.payload.ForgotPassDto;
import com.ecom.payload.OtpVerify;

@RestController
@RequestMapping("/home")
public class HomeController {
	
	@Autowired
	private EmailService emailService;
	@Autowired
	private UserService userService;
	
	
	Map<String, Integer> userOtpSession = new HashMap<>();
	
	
	@GetMapping("/sendOTP/{email}")
	public boolean sendOtp(@PathVariable String email) throws Exception {

		try {
			System.out.println(email);

			int otp = emailService.sendEmailForOTP(email);

			System.out.println(otp);

			userOtpSession.put(email, otp);

			System.out.println(userOtpSession.get(email));

		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Otp sending error");
		}

		return true;
	}
	
	@PostMapping("/verifyOTP")
	public boolean verifyOtp(@RequestBody OtpVerify otpBody) throws Exception {
		System.out.println(otpBody.getEmail());
		System.out.println(userOtpSession.get(otpBody.getEmail()));
		try {
			if (userOtpSession.get(otpBody.getEmail()).equals(otpBody.getOtp())) {
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Otp veryfing error");
//			return false;
		}

		return false;
	}
	
	
	@PostMapping("/changePass")
	public boolean ForgotPass(@RequestBody ForgotPassDto body) {
		
			System.out.println("Hello");
			ForgotPassDto dto = new ForgotPassDto();
			dto.setEmail(body.getEmail());
			dto.setPassword(body.getPassword());
			System.out.println("changepass"+dto.getPassword());
			System.out.println("changepass"+dto.getEmail());		
			return userService.changePassword(dto);
	}
	
}
