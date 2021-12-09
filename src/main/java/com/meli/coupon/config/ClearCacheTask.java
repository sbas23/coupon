package com.meli.coupon.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class ClearCacheTask {
	
	@Autowired
	CacheManager cacheManager;

    @Scheduled(fixedRateString = "${application.clear.cache.fixedRate}", initialDelayString = "${application.clear.cache.initDelay}") 
    public void reportCurrentTime() {
    	log.info("Cleaning cache {}" , cacheManager.getCacheNames().toString());
        cacheManager.getCacheNames().parallelStream().forEach(name -> cacheManager.getCache(name).clear());
    }
}
