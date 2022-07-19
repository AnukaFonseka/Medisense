use medisense;

CREATE TABLE `users`
(
    `id`         bigint(20) NOT NULL AUTO_INCREMENT,
    `name`       varchar(40)  NOT NULL,
    `username`   varchar(15)  NOT NULL,
    `password`   varchar(100) NOT NULL,
    `created_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_users_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`name`, `username`, `password`) values ('Anuka', 'Anuka', '$2a$10$wRft55.WsnI./GehYR6xQOBM/FL5F960BMx7RWS5mntDD9j/h4qOC');


CREATE TABLE `roles`
(
    `id`   bigint(20) NOT NULL AUTO_INCREMENT,
    `name` varchar(60) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_roles_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

INSERT INTO `roles` (`name`) values ('ADMIN');


CREATE TABLE `user_roles`
(
    `user_id` bigint(20) NOT NULL,
    `role_id` bigint(20) NOT NULL,
    PRIMARY KEY (`user_id`, `role_id`),
    KEY       `fk_user_roles_role_id` (`role_id`),
    CONSTRAINT `fk_user_roles_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
    CONSTRAINT `fk_user_roles_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `customer`
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `cus_ref_no` bigint(20) NOT NULL,
    `customer_salutation` VARCHAR(10) NOT NULL ,
    `customer_full_name` VARCHAR(250) NOT NULL,
    `customer_address` VARCHAR(250),
    `customer_contact_no` VARCHAR(20),
    `customer_dob` DATE NOT NULL,
    `customer_reg_date` DATE NOT NULL,
    `customer_nic` VARCHAR(20),
    `customer_civil_status` VARCHAR(30),
    `customer_passport_no` VARCHAR(20),
    `customer_pp_issued_date` DATE,
    `customer_pp_issued_place` VARCHAR(30),
    `customer_agency` VARCHAR(100),
    `customer_job_title` VARCHAR(150),
    `customer_country` VARCHAR(150),
    `customer_last_meal_time` DATETIME,
    `customer_last_meal_time_rfrd_by` VARCHAR(150),
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_customer_ref_no` (`cus_ref_no`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `agency_details`
    (
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `agency_name` VARCHAR(250) NOT NULL ,
        `agency_address` VARCHAR(250) ,
        `agency_contact_no` VARCHAR(20),
        `agency_fax` VARCHAR(20),
        `agency_email` VARCHAR(100),
        `agency_contact_person` VARCHAR(250),
        `agency_labour_licence` VARCHAR(100),
        `agency_commission` VARCHAR(50),
        PRIMARY KEY (`id`),
        UNIQUE KEY `uk_agency_details_agency_name` (`agency_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `job_details`
(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `job_name` VARCHAR(250) NOT NULL ,
    `job_description` VARCHAR(250) ,
    PRIMARY KEY (`id`),
    UNIQUE KEY `uk_job_details_job_name` (`job_name`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_roles` (`user_id`, `role_id`) values (1, 4);