package com.medisense.apiserver;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.tanukisoftware.wrapper.WrapperListener;
import org.tanukisoftware.wrapper.WrapperManager;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@Configuration
@EnableConfigurationProperties
@EnableScheduling
@ConfigurationPropertiesScan
public class ApiServerApplication implements WrapperListener {
    private static final Logger logger= LogManager.getLogger(ApiServerApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(ApiServerApplication.class, args);
    }

    @Override
    public Integer start( String[] args )
    {

        logger.info("=====================================================");
        logger.info("=========== Starting API Server =============");
        logger.info("=====================================================");

        SpringApplication app = new SpringApplication(ApiServerApplication.class);
        app.run(args);

        logger.info("=====================================================");
        logger.info("===========  API Server Started =============");
        logger.info("=====================================================");


        return null;
    }

    @Override
    public int stop(int i) {
        logger.info("=====================================================");
        logger.info("=========== Stopping API Server =============");
        logger.info("=====================================================");

        System.exit(i);

        logger.info("=====================================================");
        logger.info("=========== API  Server Stopped ==============");
        logger.info("=====================================================");
        return i;
    }

    @Override
    public void controlEvent(int event) {
        if ( ( event == WrapperManager.WRAPPER_CTRL_LOGOFF_EVENT )
                && ( WrapperManager.isLaunchedAsService() ) ) {
            // Ignore
        }
        else {
            WrapperManager.stop( 0 );
            // Will not get here.
        }
    }
}
