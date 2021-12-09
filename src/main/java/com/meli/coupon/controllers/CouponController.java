package com.meli.coupon.controllers;

import java.util.UUID;

import org.slf4j.MDC;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.meli.coupon.models.RequestItems;
import com.meli.coupon.services.CouponService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class CouponController {
	
	@Autowired 
	CouponService couponService;

	@PostMapping(value = "/coupon/", produces = { MediaType.APPLICATION_JSON_VALUE })
	public ResponseEntity<Object> getItemsToBuy(@RequestBody RequestItems requestItems) {
		UUID spanId = UUID.randomUUID();
		MDC.put("spanId", spanId.toString());
		log.info("Start request: {}", requestItems);
		ResponseEntity<Object> response = ResponseEntity.badRequest().body("List of empty items or coupon amount equal to zero");
		if (validateRequest(requestItems)) {
			response =  couponService.calculate(requestItems);
		}
		log.info("End request, response: {}", response.getBody());
		MDC.clear();
		return response;
	}

	public boolean validateRequest(RequestItems requestItems) {
		return requestItems.getItemIds() != null && !requestItems.getItemIds().isEmpty() && requestItems.getAmount() > 0;
	}
}
