package org.hackathon.packapp.containerbank.configuration;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseBuilder;
import org.springframework.jdbc.datasource.embedded.EmbeddedDatabaseType;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.init.DatabasePopulatorUtils;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

import javax.sql.DataSource;

@Configuration
public class DataSourcesConfiguration {

    /*
        @Bean
        public DataSource mysqlDataSource() {
            DriverManagerDataSource dataSource = new DriverManagerDataSource();
            dataSource.setDriverClassName("com.mysql.jdbc.Driver");
            dataSource.setUrl("jdbc:mysql://localhost:3306/springjdbc");
            dataSource.setUsername("guest_user");
            dataSource.setPassword("guest_password");

            return dataSource;
        }
    */

    @Bean
    public DataSource hsqlDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("org.hsqldb.jdbcDriver");
        dataSource.setUrl("jdbc:hsqldb:mem:containerbank");
        dataSource.setUsername("sa");
        dataSource.setPassword("");

        // schema init
        Resource initSchema = new ClassPathResource("db/hsqldb/initDB.sql");
        Resource initData = new ClassPathResource("db/hsqldb/populateDB.sql");
        DatabasePopulator databasePopulator = new ResourceDatabasePopulator(initSchema, initData);
        DatabasePopulatorUtils.execute(databasePopulator, dataSource);


        return dataSource;
    }
}
