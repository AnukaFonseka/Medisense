package com.medisense.apiserver.entities;

import javax.persistence.*;

@Entity
@Table(name = "country_details")
public class Country {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String country_name;

    private String country_code;

    private String country_gcc;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCountry_name() {
        return country_name;
    }

    public void setCountry_name(String country_name) {
        this.country_name = country_name;
    }

    public String getCountry_code() {
        return country_code;
    }

    public void setCountry_code(String country_code) {
        this.country_code = country_code;
    }

    public String getCountry_gcc() {
        return country_gcc;
    }

    public void setCountry_gcc(String country_gcc) {
        this.country_gcc = country_gcc;
    }

    @Override
    public String toString() {
        return "Country{" +
                "id=" + id +
                ", country_name='" + country_name + '\'' +
                ", country_code='" + country_code + '\'' +
                ", country_gcc='" + country_gcc + '\'' +
                '}';
    }
}



