
package org.hackathon.packapp.containerbank.repository;

import org.hackathon.packapp.containerbank.model.Advisor;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository class for <code>Advisor</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data See here: http://static.springsource.org/spring-data/jpa/docs/current/reference/html/jpa.repositories.html#jpa.query-methods.query-creation
 *
 * @author Wavestone
 */
public interface AdvisorRepository extends CrudRepository<Advisor, Long> {

    /**
     * Retrieve all <code>Advisor</code>s from the data store.
     *
     * @return a <code>Collection</code> of <code>Advisor</code>s
     */
    @Query("SELECT distinct advisor FROM Advisor advisor left join fetch advisor.specialties ORDER BY advisor.lastName, advisor.firstName")
    List<Advisor> findAll() throws DataAccessException;


}
