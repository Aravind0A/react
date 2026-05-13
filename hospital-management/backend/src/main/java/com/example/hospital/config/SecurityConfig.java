package com.example.hospital.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import java.util.List;

import com.example.hospital.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	 @Autowired
	 ApiAuthenticationFilter apiAuthenticationFilter;
	 
	 @Autowired
	 CustomUserDetailsService customUserDetailsService;
	   
    @Bean
    public static PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
        
    }
      
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    	http.cors(cors -> cors.configurationSource(corsConfigurationSource())) 

    	.csrf(csrf -> csrf.disable())
    	.sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)  
            )
        .authorizeHttpRequests(request -> request
                .requestMatchers("/login", "/register", "/css/**", "/js/**", "/api/**","/**").permitAll() 
                .anyRequest().authenticated())
        .formLogin(form -> form.disable())   
        .logout(logout -> logout.disable());
//        .formLogin(form -> form
//                .loginPage("/login").loginProcessingUrl("/login")
//                .defaultSuccessUrl("/doctors", true).permitAll())
//        .logout(logout -> logout
//                .invalidateHttpSession(true).clearAuthentication(true)
//                .logoutUrl("/logout")
//                .logoutSuccessUrl("/loginAdmin?logout").permitAll()); // Logout settings
    	http.addFilterBefore(apiAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

           
        return http.build();
    }
   
    @Autowired
    public void configure (AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(customUserDetailsService).passwordEncoder(passwordEncoder());
    }    
    
   
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000"));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS")); // ← OPTIONS is required for preflight
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}