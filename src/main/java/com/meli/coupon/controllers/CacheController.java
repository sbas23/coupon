package com.meli.coupon.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.meli.coupon.cache.ItemCache;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class CacheController {
	
	@Autowired
	ItemCache itemCache;
	
	@GetMapping(value = "/cache/cleanAllItem", produces = { MediaType.APPLICATION_JSON_VALUE })
	public boolean cleanAllItem() {
		itemCache.evictAllItems();
		log.info("Items was cleaned of cache");
		return true;
	}

}
