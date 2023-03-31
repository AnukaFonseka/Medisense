package com.medisense.apiserver.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer cus_ref_no;

    private String customer_salutation;

    private String customer_full_name;

    private String customer_address;

    private String customer_contact_no;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date customer_dob;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date customer_reg_date;

    private String customer_nic;

    private String customer_civil_status;

    private String customer_passport_no;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date customer_pp_issued_date;

    private String customer_pp_issued_place;

    private String customer_agency;

    private String customer_job_title;

    private String customer_country;

    @JsonFormat(pattern = "HH:mm")
    private Date customer_last_meal_time;

    private String customer_last_meal_time_rfrd_by;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCus_ref_no() {
        return cus_ref_no;
    }

    public void setCus_ref_no(Integer cus_ref_no) {
        this.cus_ref_no = cus_ref_no;
    }

    public String getCustomer_salutation() {
        return customer_salutation;
    }

    public void setCustomer_salutation(String customer_salutation) {
        this.customer_salutation = customer_salutation;
    }

    public String getCustomer_full_name() {
        return customer_full_name;
    }

    public void setCustomer_full_name(String customer_full_name) {
        this.customer_full_name = customer_full_name;
    }

    public String getCustomer_address() {
        return customer_address;
    }

    public void setCustomer_address(String customer_address) {
        this.customer_address = customer_address;
    }

    public String getCustomer_contact_no() {
        return customer_contact_no;
    }

    public void setCustomer_contact_no(String customer_contact_no) {
        this.customer_contact_no = customer_contact_no;
    }

    public Date getCustomer_dob() {
        return customer_dob;
    }

    public void setCustomer_dob(Date customer_dob) {
        this.customer_dob = customer_dob;
    }

    public Date getCustomer_reg_date() {
        return customer_reg_date;
    }

    public void setCustomer_reg_date(Date customer_reg_date) {
        this.customer_reg_date = customer_reg_date;
    }

    public String getCustomer_nic() {
        return customer_nic;
    }

    public void setCustomer_nic(String customer_nic) {
        this.customer_nic = customer_nic;
    }

    public String getCustomer_civil_status() {
        return customer_civil_status;
    }

    public void setCustomer_civil_status(String customer_civil_status) {
        this.customer_civil_status = customer_civil_status;
    }

    public String getCustomer_passport_no() {
        return customer_passport_no;
    }

    public void setCustomer_passport_no(String customer_passport_no) {
        this.customer_passport_no = customer_passport_no;
    }

    public Date getCustomer_pp_issued_date() {
        return customer_pp_issued_date;
    }

    public void setCustomer_pp_issued_date(Date customer_pp_issued_date) {
        this.customer_pp_issued_date = customer_pp_issued_date;
    }

    public String getCustomer_pp_issued_place() {
        return customer_pp_issued_place;
    }

    public void setCustomer_pp_issued_place(String customer_pp_issued_place) {
        this.customer_pp_issued_place = customer_pp_issued_place;
    }

    public String getCustomer_agency() {
        return customer_agency;
    }

    public void setCustomer_agency(String customer_agency) {
        this.customer_agency = customer_agency;
    }

    public String getCustomer_job_title() {
        return customer_job_title;
    }

    public void setCustomer_job_title(String customer_job_title) {
        this.customer_job_title = customer_job_title;
    }

    public String getCustomer_country() {
        return customer_country;
    }

    public void setCustomer_country(String customer_country) {
        this.customer_country = customer_country;
    }

    public Date getCustomer_last_meal_time() {
        return customer_last_meal_time;
    }

    public void setCustomer_last_meal_time(Date customer_last_meal_time) {
        this.customer_last_meal_time = customer_last_meal_time;
    }

    public String getCustomer_last_meal_time_rfrd_by() {
        return customer_last_meal_time_rfrd_by;
    }

    public void setCustomer_last_meal_time_rfrd_by(String customer_last_meal_time_rfrd_by) {
        this.customer_last_meal_time_rfrd_by = customer_last_meal_time_rfrd_by;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", cus_ref_no=" + cus_ref_no +
                ", customer_salutation='" + customer_salutation + '\'' +
                ", customer_full_name='" + customer_full_name + '\'' +
                ", customer_address='" + customer_address + '\'' +
                ", customer_contact_no='" + customer_contact_no + '\'' +
                ", customer_dob=" + customer_dob +
                ", customer_reg_date=" + customer_reg_date +
                ", customer_nic='" + customer_nic + '\'' +
                ", customer_civil_status='" + customer_civil_status + '\'' +
                ", customer_passport_no='" + customer_passport_no + '\'' +
                ", customer_pp_issued_date=" + customer_pp_issued_date +
                ", customer_pp_issued_place='" + customer_pp_issued_place + '\'' +
                ", customer_agency='" + customer_agency + '\'' +
                ", customer_job_title='" + customer_job_title + '\'' +
                ", customer_country='" + customer_country + '\'' +
                ", customer_last_meal_time=" + customer_last_meal_time +
                ", customer_last_meal_time_rfrd_by='" + customer_last_meal_time_rfrd_by + '\'' +
                '}';
    }
}
