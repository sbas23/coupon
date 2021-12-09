package com.meli.coupon.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.meli.coupon.cache.ItemCache;
import com.meli.coupon.models.ItemData;
import com.meli.coupon.models.RequestItems;
import com.meli.coupon.models.ResponseItems;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CouponService {
	
	@Autowired
	ItemCache itemCache; 

	public ResponseEntity<Object> calculate( RequestItems requestItems) {
		List<ItemData> items = getItemPrices(requestItems.getItemIds());
		sortListByPrice(items);
		ResponseItems responseItems = maximizeCoupon(items, requestItems.getAmount());
		
		if (responseItems.getItemIds().isEmpty()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Insufficient coupon balance for selected items.");
		} 
		return ResponseEntity.ok().body(responseItems);
	}
	
	public ResponseItems maximizeCoupon(List<ItemData> items, Float amount) {
		log.debug("Coupon value: {}", amount);
		Float availableBalance = amount;
		List<String> validItemIdsToBuy = new ArrayList<>();
		ResponseItems responseItems = new ResponseItems();
		
		for (ItemData itemData : items) {
			log.debug("Item data: {}", itemData);
			availableBalance = availableBalance - itemData.getPrice();
			if (availableBalance >= 0) {
				validItemIdsToBuy.add(itemData.getItemId());
			} else {
				availableBalance = availableBalance + itemData.getPrice();
				break;
			}
		}
		log.debug("Final balance: {}, items: {}", availableBalance, validItemIdsToBuy);
		responseItems.setTotal(availableBalance);
		responseItems.setItemIds(validItemIdsToBuy);
		return responseItems;
	}
	
	private void sortListByPrice(List<ItemData> items) {
		Collections.sort(items, (o1, o2) -> o1.getPrice().compareTo(o2.getPrice()));
	}
	
	private List<ItemData> getItemPrices(List<String> itemIds) {
		List<String> cleanedList = itemIds.stream().distinct().collect(Collectors.toList());
		List<ItemData> items = new ArrayList<>();
		cleanedList.forEach(item -> {
			ItemData itemData = itemCache.getItemByItemId(item);
			if (itemData != null && itemData.getPrice() > 0) {
				items.add(itemData);
			}
		});
		log.debug("Items information: {}", items);
		return items;
	}
	
}
