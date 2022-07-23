package com.medisense.apiserver.service;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.entities.Tests;
import com.medisense.apiserver.repository.TestsRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestsService {

    private static final Logger logger= LogManager.getLogger(TestsService.class);

    @Autowired
    private TestsRepository testsRepository;

    public List<Tests> getTestByTestName(String testName){
        List<Tests> tests = testsRepository.getTestByTestName(testName);
        return tests;
    }

    public HttpResult saveTestToDb(Tests test){
        logger.info("Create Test request recieved [{}]", test);
        Tests persistedTest = testsRepository.save(test);

        if(persistedTest.getId() != null){
            logger.info("Test created by Test ID [{}]", persistedTest.getId());
            return new HttpResult("Success","S1000");
        } else {
            logger.info("Create Test request failed");
            return new HttpResult("Error","E1000");
        }
    }
}
