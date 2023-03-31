package com.medisense.apiserver.service;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.entities.Job;
import com.medisense.apiserver.repository.JobRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    private static final Logger logger= LogManager.getLogger(JobService.class);

    @Autowired
    private JobRepository jobRepository;

    public List<Job> getJobByJobName(String jobName){
        List<Job> jobs = jobRepository.getJobByJobName(jobName);
        return jobs;
    }

    public HttpResult saveJobToDb(Job job){
        logger.info("Create Job request recieved [{}]", job);
        Job persistedJob = jobRepository.save(job);

        if(persistedJob.getId() != null){
            logger.info("Job created by Job ID [{}]", persistedJob.getId());
            return new HttpResult("Success","S1000");
        } else {
            logger.info("Create Job request failed");
            return new HttpResult("Error","E1000");
        }
    }

}
