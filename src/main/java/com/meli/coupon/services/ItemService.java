package com.meli.coupon.services;

import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.meli.coupon.models.ItemData;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ItemService {
	
	@Value("${application.meli.url}")
	private String urlMeli;
	@Value("${application.meli.items-path}")
	private String itemsPath;
	
	RestTemplate restTemplate = new RestTemplate(getClientHttpRequestFactory());
	
	public ItemData getItemByItemId(String itemId) {
		try {
			String url = new StringBuilder(urlMeli).append(itemsPath).append(itemId).toString();
			
			ResponseEntity<Map<String, Object>> response = restTemplate.exchange(url, HttpMethod.GET, 
					null, new ParameterizedTypeReference<Map<String, Object>>() {});
			
			if (response.getStatusCode() == HttpStatus.OK) {
				log.debug("Response: {}", response.getBody());
				ItemData item = new ItemData();
				item.setItemId(itemId);
				item.setPrice(response.getBody().containsKey("price") ? Float.parseFloat(response.getBody().get("price").toString()) : 0);
				return item;
			} else {
				return null;
			}
			
		} catch (Exception e) {
			log.error("getItemByItemId - Exception: {}", e.getMessage());
			return null;
		}
	}
	
	private SimpleClientHttpRequestFactory getClientHttpRequestFactory() {
	    SimpleClientHttpRequestFactory clientHttpRequestFactory = new SimpleClientHttpRequestFactory();
	    clientHttpRequestFactory.setConnectTimeout(1_000);   
	    clientHttpRequestFactory.setReadTimeout(1_000);
	    return clientHttpRequestFactory;
	}
	
	public void setUrlMeli(String urlMeli) {
		this.urlMeli = urlMeli;
	}

	public void setItemsPath(String itemsPath) {
		this.itemsPath = itemsPath;
	}
}
