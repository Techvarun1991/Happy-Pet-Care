
package com.ecom.Service.Imp;

import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired(required = false)
	private JavaMailSender emailsend;
	
	public int sendEmailForOTP(String email) {
		
		System.out.println("Hello");
		SimpleMailMessage msg = new SimpleMailMessage();
		
		Random random = new Random();
		
		int otp = random.nextInt(900000);
		if(otp<100000) {
			otp+=100000;
		}
		System.out.println("hello :"+otp);
		msg.setFrom("techbrutal1@gmail.com");
		
		msg.setTo(email);
		
		msg.setSubject("OTP CONFIRMATION");
		
		msg.setText("OTP :"+otp);
		
		emailsend.send(msg);
		System.out.println("hello :"+otp);
		return otp;
	}
}
