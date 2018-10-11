package org.hackathon.packapp.containerbank.configuration;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

import javax.sql.DataSource;

@Configuration
public class DataSourcesConfiguration {

    @Value("${jdbc.driver:org.hsqldb.jdbcDriver}")
    private String dataSourceDriver;
    @Value("${jdbc.url:jdbc:hsqldb:mem:containerbank}")
    private String dataSourceUrl;
    @Value("${jdbc.paswword: }")
    private String dataSourcePassword;
    @Value("${jdbc.user:sa}")
    private String dataSourceUser;

    /*
        @Bean
        public DataSource mysqlDataSource() {
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName(dataSourceDriver);
            dataSource.setUrl(dataSourceUrl);
            dataSource.setUsername(dataSourceUser);
            dataSource.setPassword(dataSourcePassword);

            return dataSource;
        }
    */

    @Bean
    public DataSource hsqlDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName(dataSourceDriver);
        dataSource.setUrl(dataSourceUrl);
        dataSource.setUsername(dataSourceUser);
        dataSource.setPassword(dataSourcePassword);

        // schema init
        Resource initSchema = new ClassPathResource("db/hsqldb/initDB.sql");
        Resource initData = new ClassPathResource("db/hsqldb/populateDB.sql");
        DatabasePopulator databasePopulator = new ResourceDatabasePopulator(initSchema, initData);
        DatabasePopulatorUtils.execute(databasePopulator, dataSource);


        return dataSource;
    }
}
