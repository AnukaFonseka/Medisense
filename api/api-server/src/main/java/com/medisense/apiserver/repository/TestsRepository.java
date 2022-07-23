package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.Tests;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TestsRepository extends CrudRepository<Tests, Integer> {
    @Query("SELECT test FROM Tests test WHERE test.test_code LIKE CONCAT('%',:name,'%')")
    public List<Tests> getTestByTestName(@Param("name") String name);
}
