package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.Country;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CountryRepository extends CrudRepository<Country, Integer> {
    @Query("SELECT country FROM Country country WHERE country.country_name LIKE CONCAT('%',:name,'%')")
    public List<Country> getCountryByCountryName(@Param("name") String name);
}
