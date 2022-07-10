package com.medisense.apiserver.controller;

import com.medisense.apiserver.entities.Customer;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.service.CustomerService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private static final Logger logger= LogManager.getLogger(CustomerController.class);

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping(path = "addCustomer", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public HttpResult saveCustomerToDb(@RequestBody Customer customer) {
        logger.info("Create customer request received [{}]", customer);
        return customerService.saveCustomerToDb(customer);
    }

    @PutMapping(path = "updateCustomer", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public HttpResult updateCustomerInDb(@RequestBody Customer customer) {
        logger.info("Create customer request received [{}]", customer);
        return customerService.updateCustomerInDb(customer);
    }

    @GetMapping(path = "getCustomers")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Customer> getCustomersByName(@RequestParam String customerName) {
        logger.info("Find customer by name request received [{}]", customerName);
        return customerService.getCustomersByCustomerName(customerName);
    }

}
