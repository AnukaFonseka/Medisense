package com.medisense.apiserver.entities;

import javax.persistence.*;

@Entity
@Table(name = "job_details")
public class Job {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String job_name;

    private String job_description;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJob_name() {
        return job_name;
    }

    public void setJob_name(String job_name) {
        this.job_name = job_name;
    }

    public String getJob_description() {
        return job_description;
    }

    public void setJob_description(String job_description) {
        this.job_description = job_description;
    }

    @Override
    public String toString() {
        return "Job{" +
                "id=" + id +
                ", job_name='" + job_name + '\'' +
                ", job_description='" + job_description + '\'' +
                '}';
    }
}
