package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.Customer;
import com.medisense.apiserver.entities.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends CrudRepository<Customer, Integer> {

    @Query("SELECT customer FROM Customer customer WHERE customer.customer_full_name = :name")
    public User getCustomerByCustomerName(@Param("name") String name);
}
