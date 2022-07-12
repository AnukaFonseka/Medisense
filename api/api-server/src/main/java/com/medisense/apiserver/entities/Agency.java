package com.medisense.apiserver.entities;

import javax.persistence.*;

@Entity
@Table(name = "agency_details")
public class Agency {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String agency_name;

    private String agency_address;

    private String agency_contact_no;

    private String agency_fax;

    private String agency_email;

    private String agency_contact_person;

    private String agency_labour_licence;

    private String agency_commission;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAgency_name() {
        return agency_name;
    }

    public void setAgency_name(String agency_name) {
        this.agency_name = agency_name;
    }

    public String getAgency_address() {
        return agency_address;
    }

    public void setAgency_address(String agency_address) {
        this.agency_address = agency_address;
    }

    public String getAgency_contact_no() {
        return agency_contact_no;
    }

    public void setAgency_contact_no(String agency_contact_no) {
        this.agency_contact_no = agency_contact_no;
    }

    public String getAgency_fax() {
        return agency_fax;
    }

    public void setAgency_fax(String agency_fax) {
        this.agency_fax = agency_fax;
    }

    public String getAgency_email() {
        return agency_email;
    }

    public void setAgency_email(String agency_email) {
        this.agency_email = agency_email;
    }

    public String getAgency_contact_person() {
        return agency_contact_person;
    }

    public void setAgency_contact_person(String agency_contact_person) {
        this.agency_contact_person = agency_contact_person;
    }

    public String getAgency_labour_licence() {
        return agency_labour_licence;
    }

    public void setAgency_labour_licence(String agency_labour_licence) {
        this.agency_labour_licence = agency_labour_licence;
    }

    public String getAgency_commission() {
        return agency_commission;
    }

    public void setAgency_commission(String agency_commission) {
        this.agency_commission = agency_commission;
    }

    @Override
    public String toString() {
        return "Agency{" +
                "id=" + id +
                ", agency_name='" + agency_name + '\'' +
                ", agency_address='" + agency_address + '\'' +
                ", agency_contact_no='" + agency_contact_no + '\'' +
                ", agency_fax='" + agency_fax + '\'' +
                ", agency_email='" + agency_email + '\'' +
                ", agency_contact_person='" + agency_contact_person + '\'' +
                ", agency_labour_licence='" + agency_labour_licence + '\'' +
                ", agency_commission='" + agency_commission + '\'' +
                '}';
    }
}
