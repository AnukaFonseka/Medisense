package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.TestPackage;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TestPackageRepository extends CrudRepository<TestPackage, Integer> {
    @Query("SELECT test FROM TestPackage test WHERE test.test_code LIKE CONCAT('%',:name,'%')")
    public List<TestPackage> getTestPackageByName(@Param("name") String name);
}
