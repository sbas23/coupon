package com.meli.coupon.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class RequestItems {
	@JsonProperty("item_ids")
	private List<String> itemIds;
	private Float amount;
}
