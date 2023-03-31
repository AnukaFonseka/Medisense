package com.medisense.apiserver.controller;

import com.medisense.apiserver.entities.Country;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.service.CountryService;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@RestController
@RequestMapping("/countries")
public class CountryController {

    private static final Logger logger= LogManager.getLogger(CountryController.class);

    private final CountryService countryService;

    public CountryController(CountryService countryService){this.countryService = countryService;}

    @PostMapping(path = "addCountry", consumes = {MediaType.APPLICATION_JSON_VALUE}, produces = {MediaType.APPLICATION_JSON_VALUE})
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public HttpResult saveCountryToDb(@RequestBody Country country) {
        logger.info("Create Country request recieved [{}]", country);
        return countryService.saveCountryToDb(country);
    }

    @GetMapping(path = "getCountries")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Country> getCountriesByName(@RequestParam String countryName) {
        logger.info("Find Country by name request recieved [{}]", countryName);
        return countryService.getCountryByCountryName(countryName);
    }
}
