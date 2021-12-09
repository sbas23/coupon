package com.meli.coupon;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.meli.coupon.cache.ItemCache;
import com.meli.coupon.models.ItemData;
import com.meli.coupon.models.RequestItems;
import com.meli.coupon.services.CouponService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ExtendWith(MockitoExtension.class)
class CouponServiceTest {
	
	@Mock
	ItemCache itemCache;
	@InjectMocks
	CouponService couponService;
	
	RequestItems requestItems = new RequestItems();
	
	@BeforeEach
	void config() {
		List<String> itemIds = new ArrayList<>();
		itemIds.add("MLA925840874");
		itemIds.add("MLA925840875");
		itemIds.add("MLA925840873");
		itemIds.add("MLA925840873");
		requestItems.setItemIds(itemIds);
		requestItems.setAmount(10000f);
	}
	
	@Test
	void calculateItemOk() {
		
		ItemData item = new ItemData();
		item.setItemId("MLA925840874");
		item.setPrice(2000f);
		ItemData item1 = new ItemData();
		item1.setItemId("MLA925840875");
		item1.setPrice(9000f);
		ItemData item2 = new ItemData();
		item2.setItemId("MLA925840873");
		item2.setPrice(6000f);
			
		when(itemCache.getItemByItemId("MLA925840874")).thenReturn(item);
		when(itemCache.getItemByItemId("MLA925840875")).thenReturn(item1);
		when(itemCache.getItemByItemId("MLA925840873")).thenReturn(item2);
		
		ResponseEntity<Object> result = couponService.calculate(requestItems);
		log.info("Response - status: {} and body: {}", result.getStatusCode(), result.getBody());
		assertEquals(HttpStatus.OK, result.getStatusCode());
		assertThat(result.getBody()).isNotNull();
		
	}
	
	@Test
	void calculateItemEmpty() {
				
		when(itemCache.getItemByItemId("MLA925840874")).thenReturn(null);
		when(itemCache.getItemByItemId("MLA925840875")).thenReturn(null);
		when(itemCache.getItemByItemId("MLA925840873")).thenReturn(null);
		
		ResponseEntity<Object> result = couponService.calculate(requestItems);
		log.info("Response - status: {} and body: {}", result.getStatusCode(), result.getBody());
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		assertThat(result.getBody()).isNotNull();
		assertEquals("Insufficient coupon balance for selected items.", result.getBody());
		
	}

	@Test
	void calculatePriceZero() {
		
		ItemData item = new ItemData();
		item.setItemId("MLA925840874");
		item.setPrice(0f);
		ItemData item1 = new ItemData();
		item1.setItemId("MLA925840875");
		item1.setPrice(0f);
		ItemData item2 = new ItemData();
		item2.setItemId("MLA925840873");
		item2.setPrice(0f);
			
		when(itemCache.getItemByItemId("MLA925840874")).thenReturn(item);
		when(itemCache.getItemByItemId("MLA925840875")).thenReturn(item1);
		when(itemCache.getItemByItemId("MLA925840873")).thenReturn(item2);
		
		ResponseEntity<Object> result = couponService.calculate(requestItems);
		log.info("Response - status: {} and body: {}", result.getStatusCode(), result.getBody());
		assertEquals(HttpStatus.NOT_FOUND, result.getStatusCode());
		assertThat(result.getBody()).isNotNull();
		assertEquals("Insufficient coupon balance for selected items.", result.getBody());
		
	}
}
