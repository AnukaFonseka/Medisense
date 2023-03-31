package com.medisense.apiserver.service;
import com.medisense.apiserver.entities.Agency;
import com.medisense.apiserver.entities.HttpResult;
import com.medisense.apiserver.repository.AgencyRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgencyService {

    private static final Logger logger= LogManager.getLogger(AgencyService.class);

    @Autowired
    private AgencyRepository agencyRepository;

    public List<Agency> getAgencyByAgencyName(String agencyName){
        List<Agency> agencies = agencyRepository.getAgencyByAgencyName(agencyName);
        return agencies;
    }

    public HttpResult saveAgencyToDb(Agency agency){
        logger.info("Create Agency request recieved [{}]", agency);
        Agency persistedAgency = agencyRepository.save(agency);

        if(persistedAgency.getId() != null){
            logger.info("Agency created by Agency ID [{}]", persistedAgency.getId());
            return new HttpResult("Success","S1000");
        } else {
            logger.info("Create agency request failed");
            return new HttpResult("Error","E1000");
        }
    }




}
