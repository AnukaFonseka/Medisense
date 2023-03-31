package com.medisense.apiserver.entities;

import java.util.List;

public class TestDetails {

    private String test_code;
    private Integer test_amount;
    private List<Test> test_names;

    public String getTest_code() {
        return test_code;
    }

    public void setTest_code(String test_code) {
        this.test_code = test_code;
    }

    public Integer getTest_amount() {
        return test_amount;
    }

    public void setTest_amount(Integer test_amount) {
        this.test_amount = test_amount;
    }

    public List<Test> getTest_names() {
        return test_names;
    }

    public void setTest_names(List<Test> test_names) {
        this.test_names = test_names;
    }
}
