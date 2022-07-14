package com.medisense.apiserver.controller;


import com.medisense.apiserver.entities.Agency;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.service.AgencyService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("/agencies")
public class AgencyController {

    private static final Logger logger= LogManager.getLogger(AgencyController.class);

    private final AgencyService agencyService;

    public AgencyController(AgencyService agencyService){ this.agencyService = agencyService;}

    @PostMapping(path = "addAgency", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public HttpResult saveAgencyToDb(@RequestBody Agency agency) {
        logger.info("Create Agency request recieved [{}]", agency);
        return agencyService.saveAgencyToDb(agency);
    }

    @GetMapping(path = "getAgencies")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Agency> getAgenciesByName(@RequestParam String agencyName) {
        logger.info("Find Agency by name request recieved [{}]", agencyName);
        return agencyService.getAgencyByAgencyName(agencyName);
    }
}
