package com.medisense.apiserver.service;
import com.medisense.apiserver.entities.Country;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import java.util.List;
@Service
public class CountryService {

    private static final Logger logger= LogManager.getLogger(CountryService.class);

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getCountryByCountryName(String countryName){
        List<Country> countries = countryRepository.getCountryByCountryName(countryName);
        return countries;
    }

    public HttpResult saveCountryToDb(Country country){
        logger.info("Create Country request recieved [{}]", country);
        Country persistedCountry = countryRepository.save(country);

        if(persistedCountry.getId() != null){
            logger.info("Country created by Country ID [{}]", persistedCountry.getId());
            return new HttpResult("Success", "S1000");
        } else {
            logger.info("Create country request failed");
            return new HttpResult("Error", "E1000");
        }
    }
}
