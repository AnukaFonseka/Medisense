package com.medisense.apiserver.service;

import com.medisense.apiserver.entities.CashierList;
import com.medisense.apiserver.repository.CashierListRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CashierListService {

    private static final Logger logger= LogManager.getLogger(CashierListService.class);

    @Autowired
    private CashierListRepository cashierListRepository;

    public List<CashierList> getCashierList(){
        logger.info("Get cashier list request received");
        List<CashierList> list = cashierListRepository.findAll();

        return list;

    }
}
