package com.medisense.apiserver.entities;

import javax.persistence.*;

@Entity
@Table(name = "test_details")
public class Tests {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String test_code;

    private String test_name;

    private Integer test_amount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTest_code() {
        return test_code;
    }

    public void setTest_code(String test_code) {
        this.test_code = test_code;
    }

    public String getTest_name() {
        return test_name;
    }

    public void setTest_name(String test_name) {
        this.test_name = test_name;
    }

    public Integer getTest_amount() {
        return test_amount;
    }

    public void setTest_amount(Integer test_amount) {
        this.test_amount = test_amount;
    }

    @Override
    public String toString() {
        return "Tests{" +
                "id=" + id +
                ", test_code='" + test_code + '\'' +
                ", test_name='" + test_name + '\'' +
                ", test_amount=" + test_amount +
                '}';
    }
}