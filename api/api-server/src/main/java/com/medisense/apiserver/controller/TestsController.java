package com.medisense.apiserver.controller;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.entities.Test;
import com.medisense.apiserver.entities.TestDetails;
import com.medisense.apiserver.entities.TestPackage;
import com.medisense.apiserver.service.TestsService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tests")
public class TestsController {

    private static final Logger logger= LogManager.getLogger(TestsController.class);

    private final TestsService testsService;

    public TestsController(TestsService testsService){ this.testsService = testsService;}

    @PostMapping(path = "addTest", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public HttpResult saveTestToDb(@RequestBody Test test) {
        logger.info("Create Test request recieved [{}]", test);
        return testsService.saveTestToDb(test);
    }

    @GetMapping(path = "getTests")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Test> getTestsByCode(@RequestParam String testCode) {
        logger.info("Find Tests by code request recieved [{}]", testCode);
        return testsService.getTestByTestCode(testCode);
    }
}