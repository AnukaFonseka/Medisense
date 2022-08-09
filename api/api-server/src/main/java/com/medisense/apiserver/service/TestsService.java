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

    public List<TestDetails> getTestByTestName(String testCode){
        List<TestDetails> testDetailsList = new ArrayList<>();
        List<TestPackage> testPackages = testPackageRepository.getTestPackageByName(testCode);
        for(TestPackage testPackage:testPackages) {
            TestDetails testDetails = new TestDetails();
            testDetails.setTest_code(testPackage.getTest_code());
            testDetails.setTest_amount(testPackage.getTest_amount());
            List<Test> tests = testsRepository.getTestByTestPackage(testPackage.getTest_code());
            testDetails.setTest_names(tests);
            testDetailsList.add(testDetails);
        }
        return testDetailsList;
    }

    public HttpResult saveTestToDb(TestDetails testDetails){
        logger.info("Create Test request recieved [{}]", testDetails);

        List<Test> testList = testDetails.getTest_names();
        for (Test test:testList){
            test.setTest_code(testDetails.getTest_code());
        }

        Iterable<Test> persistedTests = testsRepository.saveAll(testList);

        TestPackage testPackage = new TestPackage();
        testPackage.setTest_code(testDetails.getTest_code());
        testPackage.setTest_amount(testDetails.getTest_amount());

        TestPackage persistedTestPackage = testPackageRepository.save(testPackage);

        if(persistedTests.iterator().next() != null && persistedTestPackage.getId() != null){
            logger.info("Test created by Test ID [{}]", persistedTestPackage.getId());
            return new HttpResult("Success","S1000");
        } else {
            logger.info("Create Test request failed");
            return new HttpResult("Error","E1000");
        }
    }
}
