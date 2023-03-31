package com.medisense.apiserver.controller;

import com.medisense.apiserver.entities.CashierList;
import com.medisense.apiserver.service.CashierListService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cashierList")
public class CashierListController {
    private static final Logger logger= LogManager.getLogger(CashierListController.class);

    private final CashierListService cashierListService;

    public CashierListController(CashierListService cashierListService){ this.cashierListService = cashierListService;}

    @GetMapping(path = "getCashierList")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<CashierList> getCashierList(){
        logger.info("Get Cashier List request received");

        return cashierListService.getCashierList();
    }
}
