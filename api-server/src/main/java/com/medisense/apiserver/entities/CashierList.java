package com.medisense.apiserver.entities;

import javax.persistence.*;

@Entity
@Table(name = "cashier_list")
public class CashierList {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Integer cus_ref_no;

    private String cus_name;

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

    public String getCus_name() {
        return cus_name;
    }

    public void setCus_name(String cus_name) {
        this.cus_name = cus_name;
    }

    @Override
    public String toString() {
        return "CashierList{" +
                "id=" + id +
                ", cus_ref_no=" + cus_ref_no +
                ", cus_name='" + cus_name + '\'' +
                '}';
    }
}
