package com.medisense.apiserver.service;

import com.medisense.apiserver.entities.Customer;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.repository.CustomerRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {

    private static final Logger logger= LogManager.getLogger(CustomerService.class);

    @Autowired
    private CustomerRepository customerRepository;


    public List<Customer> getCustomersByCustomerName(String customerName){
        List<Customer> customers = customerRepository.getCustomerByCustomerName(customerName);
        return customers;
    }

    public HttpResult saveCustomerToDb(Customer customer) {
        logger.info("Create customer request received [{}]", customer);
        Customer persistedCustomer = customerRepository.save(customer);

        if(persistedCustomer.getId() != null) {
            logger.info("Customer created by Customer ID [{}]", persistedCustomer.getId());
            return new HttpResult("Success", "S1000");
        } else {
            logger.info("Create customer request failed");
            return new HttpResult("Error", "E1000");
        }
    }

    public HttpResult updateCustomerInDb(Customer customer) {
        logger.info("Update customer request received [{}]", customer);
        Customer persistedCustomer = customerRepository.save(customer);

        if(persistedCustomer.getId() != null) {
            logger.info("Customer updated by Customer ID [{}]", persistedCustomer.getId());
            return new HttpResult("Success", "S1000");
        } else {
            logger.info("Update customer request failed");
            return new HttpResult("Error", "E1000");
        }
    }

}
