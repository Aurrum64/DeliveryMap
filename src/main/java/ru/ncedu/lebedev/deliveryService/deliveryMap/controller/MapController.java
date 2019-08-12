package ru.ncedu.lebedev.deliveryService.deliveryMap.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/map")
public class MapController {

    @GetMapping
    public String list() {
        return "index";
    }
}
