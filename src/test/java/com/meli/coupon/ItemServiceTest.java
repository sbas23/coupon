package com.meli.coupon;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.HashMap;
import java.util.Map;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.meli.coupon.models.ItemData;
import com.meli.coupon.services.ItemService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ExtendWith(MockitoExtension.class)
class ItemServiceTest {
	
	@Mock
	RestTemplate restTemplate;
	@InjectMocks
	ItemService itemService;
	
	@Test
	void getItemByItemIdNullResponse() {
		
		itemService.setUrlMeli("https://api.mercadolibre.com");
		itemService.setItemsPath("/items/");
		
		ResponseEntity<Map<String, Object>> response = ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		
		String url = new StringBuilder("https://api.mercadolibre.com").append("/items/").append("MLA925840874").toString();
		when(restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<Map<String, Object>>() {})).thenReturn(response);

		ItemData result = itemService.getItemByItemId("MLA925840874");
		log.info("Response: {}", result);
		assertThat(result).isNull();
		
	}
	
	@Test
	void getItemByItemIdException() {
		
		itemService.setUrlMeli("https://api.mercadolibre.com");
		itemService.setItemsPath("/items/");
		
		String url = new StringBuilder("https://api.mercadolibre.com").append("/items/").append("MLA925840874").toString();
		when(restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<Map<String, Object>>() {})).thenReturn(null);

		ItemData result = itemService.getItemByItemId("MLA925840874");
		log.info("Response: {}", result);
		assertThat(result).isNull();
		
	}
	
	@Test
	void getItemByItemIdOk() {
		
		itemService.setUrlMeli("https://api.mercadolibre.com");
		itemService.setItemsPath("/items/");
		
		Map<String, Object> data = new HashMap<>();
		data.put("price", 1000f);
		ResponseEntity<Map<String, Object>> response = ResponseEntity.status(HttpStatus.OK).body(data);
		
		String url = new StringBuilder("https://api.mercadolibre.com").append("/items/").append("MLA925840874").toString();
		when(restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<Map<String, Object>>() {})).thenReturn(response);

		ItemData result = itemService.getItemByItemId("MLA925840874");
		log.info("Response: {}", result);
		assertThat(result).isNotNull();
		
	}
	
	@Test
	void getItemByItemIdOkNoKeyPrice() {
		
		itemService.setUrlMeli("https://api.mercadolibre.com");
		itemService.setItemsPath("/items/");
		
		Map<String, Object> data = new HashMap<>();
		data.put("other", "other");
		ResponseEntity<Map<String, Object>> response = ResponseEntity.status(HttpStatus.OK).body(data);
		
		String url = new StringBuilder("https://api.mercadolibre.com").append("/items/").append("MLA925840874").toString();
		when(restTemplate.exchange(url, HttpMethod.GET, null, new ParameterizedTypeReference<Map<String, Object>>() {})).thenReturn(response);

		ItemData result = itemService.getItemByItemId("MLA925840874");
		log.info("Response: {}", result);
		assertThat(result).isNotNull();
		
	}
	
}
