package com.example.hospital.service;

import java.util.Collection;
import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class CustomUserDetail implements UserDetails{
	
	private com.example.hospital.model.UserDetails user;
	
	 public CustomUserDetail(com.example.hospital.model.UserDetails user) {
	        this.user = user;
	    }

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return List.of();
	}

	 public String getFullname() {
	        return user.getName();
	    }

	@Override
	public @Nullable String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		return user.getEmail();
	}

	@Override
    public boolean isAccountNonExpired() {
   
        return true;
    }


    @Override
    public boolean isAccountNonLocked() {
   
        return true;
    }


    @Override
    public boolean isCredentialsNonExpired() {
   
        return true;
    }


   @Override
   public boolean isEnabled() {
	   return true;
   }
}