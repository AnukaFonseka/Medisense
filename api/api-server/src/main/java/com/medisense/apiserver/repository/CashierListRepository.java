package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.CashierList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CashierListRepository extends JpaRepository<CashierList, Integer> {

}
