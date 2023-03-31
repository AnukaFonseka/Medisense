package com.medisense.apiserver.repository;

import com.medisense.apiserver.entities.Agency;
import com.medisense.apiserver.entities.Job;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepository  extends CrudRepository<Job, Integer> {
    @Query("SELECT job FROM Job job WHERE job.job_name LIKE CONCAT('%',:name,'%')")
    public List<Job> getJobByJobName(@Param("name") String name);
}
