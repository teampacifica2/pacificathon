
package org.hackathon.packapp.containerbank.repository;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.hackathon.packapp.containerbank.model.BaseEntity;
import org.hackathon.packapp.containerbank.model.Customer;

/**
 * Repository class for <code>Customer</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data See here: http://static.springsource.org/spring-data/jpa/docs/current/reference/html/jpa.repositories.html#jpa.query-methods.query-creation
 *
 * @author Wavestone
 */
public interface CustomerRepository {

    /**
     * Retrieve <code>Customer</code>s from the data store by last name, returning all customers whose last name <i>starts</i>
     * with the given name.
     *
     * @param lastName Value to search for
     * @return a <code>Collection</code> of matching <code>Customer</code>s (or an empty <code>Collection</code> if none
     * found)
     */
    Collection<Customer> findByLastName(String lastName) throws DataAccessException;

    /**
     * Retrieve an <code>Customer</code> from the data store by id.
     *
     * @param id the id to search for
     * @return the <code>Customer</code> if found
     * @throws org.springframework.dao.DataRetrievalFailureException if not found
     */
    Customer findById(int id) throws DataAccessException;


    /**
     * Save an <code>Customer</code> to the data store, either inserting or updating it.
     *
     * @param customer the <code>Customer</code> to save
     * @see BaseEntity#isNew
     */
    void save(Customer customer) throws DataAccessException;


}
