package com.medisense.apiserver.controller;

import com.medisense.apiserver.entities.Customer;
import com.medisense.apiserver.service.CustomerService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    private static final Logger logger= LogManager.getLogger(CustomerController.class);

    private final CustomerService customerService = new CustomerService();

    @PostMapping(path = "addCustomer", consumes = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void saveCustomerToDb(@RequestBody Customer customer) {
        logger.info("Create customer request received [{}]", customer);
        customerService.saveCustomerToDb(customer);
    }

    @GetMapping(path = "getCustomers")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Customer> getCustomersByName(@RequestParam String customerName) {
        return customerService.getCustomersByCustomerName(customerName);
    }

}
