package com.meli.coupon.cache;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import com.meli.coupon.models.ItemData;
import com.meli.coupon.services.ItemService;

@Component
public class ItemCache {
	
	@Autowired
	ItemService itemService;
	
	@Cacheable("getItemByItemId")
	public ItemData getItemByItemId(String itemId) {
		return itemService.getItemByItemId(itemId);
	}
	@CacheEvict(cacheNames = "getItemByItemId", allEntries = true)
	public void evictAllItems() {
		// Intentionally blank
	}

}
