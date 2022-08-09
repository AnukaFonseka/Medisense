package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.Test;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TestsRepository extends CrudRepository<Test, Integer> {
    @Query("SELECT test FROM Test test WHERE test.test_code LIKE CONCAT('%',:name,'%')")
    public List<Test> getTestByTestPackage(@Param("name") String name);
}
