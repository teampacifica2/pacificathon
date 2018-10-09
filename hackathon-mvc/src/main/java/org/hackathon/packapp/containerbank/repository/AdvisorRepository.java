
package org.hackathon.packapp.containerbank.repository;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.hackathon.packapp.containerbank.model.Advisor;

/**
 * Repository class for <code>Advisor</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data See here: http://static.springsource.org/spring-data/jpa/docs/current/reference/html/jpa.repositories.html#jpa.query-methods.query-creation
 *
 * @author Wavestone
 */
public interface AdvisorRepository {

    /**
     * Retrieve all <code>Advisor</code>s from the data store.
     *
     * @return a <code>Collection</code> of <code>Advisor</code>s
     */
    Collection<Advisor> findAll() throws DataAccessException;


}
