package com.meli.coupon;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;

import com.meli.coupon.cache.ItemCache;
import com.meli.coupon.controllers.CouponController;
import com.meli.coupon.models.RequestItems;
import com.meli.coupon.models.ResponseItems;
import com.meli.coupon.services.CouponService;
import com.meli.coupon.services.ItemService;


@ExtendWith(MockitoExtension.class)
@WebMvcTest
class CouponControllerTest {
	
    @Autowired
    protected MockMvc mvc;
    @MockBean
    CouponService couponService;
    @MockBean
    ItemCache itemCache; 
    @MockBean
    ItemService itemService; 
    @InjectMocks
    CouponController couponController;
    
    private ResponseEntity<Object> getResponse200OK() {
    	List<String> data = new ArrayList<>();
    	data.add("MLA925840874");
    	ResponseItems responseItems = new ResponseItems();
    	responseItems.setItemIds(data);
    	responseItems.setTotal(0f);
    	return ResponseEntity.ok().body(responseItems);
    }
    
    private ResponseEntity<Object> getResponse404() {
    	return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }
	
	@Test
	void getItemsToBuyTestOk() throws Exception {
		
		doReturn(getResponse200OK()).when(couponService).calculate(any());
		
		String url = "/coupon/";
		String json = "{\n" +
                "   \"amount\":\"20000\",\n" +
                "   \"item_ids\":[\"MLA925840874\"]\n" +
                "}";
		mvc.perform(
				post(url).contentType(MediaType.APPLICATION_JSON_VALUE).content(json)
		).andDo(print())
			.andExpect(status().isOk()
		);
		
	}
	
	@Test
	void getItemsToBuyTestNotFound() throws Exception {
		
		doReturn(getResponse404()).when(couponService).calculate(any());
		
		String url = "/coupon/";
		String json = "{\n" +
                "   \"amount\":\"20000\",\n" +
                "   \"item_ids\":[\"MLA925840874\"]\n" +
                "}";
		mvc.perform(
				post(url).contentType(MediaType.APPLICATION_JSON_VALUE).content(json)
		).andDo(print())
			.andExpect(status().is4xxClientError()
		);
		
	}
	
	@Test
	void validateRequestTrueTest() {
		RequestItems requestItems = new RequestItems();
		List<String> itemIds = new ArrayList<>();
		itemIds.add("MLA925840874");
		itemIds.add("MLA925840875");
		itemIds.add("MLA925840873");
		itemIds.add("MLA925840873");
		requestItems.setItemIds(itemIds);
		requestItems.setAmount(10000f);
		
		boolean result = couponController.validateRequest(requestItems);
		assertTrue(result);
	}
	
	@Test
	void validateRequestFalseTest() {
		RequestItems requestItems = new RequestItems();
		List<String> itemIds = new ArrayList<>();
		requestItems.setItemIds(itemIds);
		requestItems.setAmount(10000f);
		
		boolean result = couponController.validateRequest(requestItems);
		assertFalse(result);
	}

}
