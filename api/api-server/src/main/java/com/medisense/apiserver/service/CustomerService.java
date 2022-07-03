package com.medisense.apiserver.service;

import com.medisense.apiserver.entities.Customer;
import com.medisense.apiserver.repository.CustomerRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService {

    private static final Logger logger= LogManager.getLogger(CustomerService.class);

    @Autowired
    private CustomerRepository customerRepository;


    public List<Customer> getCustomersByCustomerName(String customerName){
        List<Customer> customers = customerRepository.getCustomerByCustomerName(customerName);
        return customers;
    }

    public void saveCustomerToDb(Customer customer) {
        logger.info("Create customer request received [{}]", customer);
        customerRepository.save(customer);
    }

}
