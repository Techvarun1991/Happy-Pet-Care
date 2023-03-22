package com.ecom.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


import com.ecom.security.JwtAuthenticationEntryPoint;
import com.ecom.security.JwtAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
    @Autowired
	UserDetailsService userDetailsService;
    public static String[] PUBLIC_URL= {"/users/","/auth/login","/product/",
    		"/products/images/11","/home/**"
    		
    };
    
    
    @Autowired
    private JwtAuthenticationEntryPoint entryPoint;
    @Autowired
    private JwtAuthenticationFilter filter;
    
	protected void configure(HttpSecurity http) throws Exception {
	
		http
		.csrf()
		.disable()
		.authorizeRequests()
		.antMatchers(PUBLIC_URL).permitAll()       //HttpMethod.POST,"/users/
		.antMatchers(HttpMethod.GET).permitAll() 
		.anyRequest()
		.authenticated()
		//.and()
		//.httpBasic();
		.and()
		.exceptionHandling()
		.authenticationEntryPoint(entryPoint)
		.and()
		.sessionManagement()
		.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		
		http.addFilterBefore(filter,UsernamePasswordAuthenticationFilter.class);		
		
	}

	//Configuration Database 
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(this.userDetailsService).passwordEncoder(passwordEncoder());
		
	}
	
	@Bean
	@Override
	protected AuthenticationManager authenticationManager() throws Exception {
		// TODO Auto-generated method stub
		return super.authenticationManager();
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		
		return new BCryptPasswordEncoder();
	}
	
	 @Bean
	    public FilterRegistrationBean corsFilter() {
	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        CorsConfiguration configuration = new CorsConfiguration();
	        configuration.setAllowCredentials(true);
	        configuration.addAllowedOriginPattern("*");
	        configuration.addAllowedHeader("Authorization");
	        configuration.addAllowedHeader("Content-Type");
	        configuration.addAllowedHeader("Accept");
	        configuration.addAllowedMethod("POST");
	        configuration.addAllowedMethod("GET");
	        configuration.addAllowedMethod("DELETE");
	        configuration.addAllowedMethod("PUT");
	        configuration.addAllowedMethod("OPTIONS");
	        configuration.setMaxAge(3600L);
	        source.registerCorsConfiguration("/**", configuration);
	        FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
	        bean.setOrder(-110);
	        return bean;
	    }

}
