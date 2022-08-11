package com.medisense.apiserver.service;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.entities.Test;
import com.medisense.apiserver.entities.TestDetails;
import com.medisense.apiserver.entities.TestPackage;
import com.medisense.apiserver.repository.TestPackageRepository;
import com.medisense.apiserver.repository.TestsRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestsService {

    private static final Logger logger= LogManager.getLogger(TestsService.class);

    @Autowired
    private TestsRepository testsRepository;

    @Autowired
    private TestPackageRepository testPackageRepository;

    public List<Test> getTestByTestCode(String testCode){
        List<Test> tests = testsRepository.getTestByTestCode(testCode);
        return tests;
    }

    public HttpResult saveTestToDb(Test test){
        logger.info("Create Test request recieved [{}]", test);
        Test persistedTest = testsRepository.save(test);

        if(persistedTest.getId() != null){
            logger.info("Test created by Test ID [{}]", persistedTest.getId());
            return new HttpResult("Success","S1000");
        } else {
            logger.info("Create test request failed");
            return new HttpResult("Error","E1000");
        }
    }
}
