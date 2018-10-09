
package org.hackathon.packapp.containerbank.repository;

import org.hackathon.packapp.containerbank.model.BaseEntity;
import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.CardType;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Repository class for <code>Card</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data See here: http://static.springsource.org/spring-data/jpa/docs/current/reference/html/jpa.repositories.html#jpa.query-methods.query-creation
 *
 * @author Wavestone
 */
public interface CardRepository extends CrudRepository<CardType, Long> {

    /**
     * Retrieve all <code>odType</code>s from the data store.
     *
     * @return a <code>Collection</code> of <code>CardType</code>s
     */
    @Query("SELECT ptype FROM CardType ptype ORDER BY ptype.name")
    List<CardType> findCardTypes() throws DataAccessException;

    /**
     * Retrieve a <code>Card</code> from the data store by id.
     *
     * @param id the id to search for
     * @return the <code>Card</code> if found
     * @throws org.springframework.dao.DataRetrievalFailureException if not found
     */
    Card findById(int id) throws DataAccessException;

    /**
     * Save a <code>Card</code> to the data store, either inserting or updating it.
     *
     * @param card the <code>Card</code> to save
     * @see BaseEntity#isNew
     */
    void save(Card card) throws DataAccessException;

}
