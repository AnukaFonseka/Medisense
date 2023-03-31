package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.Agency;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AgencyRepository extends CrudRepository<Agency, Integer> {
    @Query("SELECT agency FROM Agency agency WHERE agency.agency_name LIKE CONCAT('%',:name,'%')")
    public List<Agency> getAgencyByAgencyName(@Param("name") String name);

}
