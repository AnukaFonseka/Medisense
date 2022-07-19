package com.medisense.apiserver.controller;

import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.entities.Job;
import com.medisense.apiserver.service.JobService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
public class JobController {

    private static final Logger logger= LogManager.getLogger(JobController.class);

    private final JobService jobService;

    public JobController(JobService jobService){this.jobService = jobService;}

    @PostMapping(path = "addJob", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public HttpResult saveJobToDb(@RequestBody Job job) {
        logger.info("Create Job request recieved [{}]", job);
        return jobService.saveJobToDb(job);
    }

    @GetMapping(path = "getJobs")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Job> getAgenciesByName(@RequestParam String jobName) {
        logger.info("Find job by name request recieved [{}]", jobName);
        return jobService.getJobByJobName(jobName);
    }
}
