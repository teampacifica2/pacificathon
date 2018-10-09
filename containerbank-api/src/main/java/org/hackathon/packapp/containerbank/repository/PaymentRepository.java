
package org.hackathon.packapp.containerbank.repository;

import java.util.List;

import org.springframework.dao.DataAccessException;
import org.hackathon.packapp.containerbank.model.BaseEntity;
import org.hackathon.packapp.containerbank.model.Payment;

/**
 * Repository class for <code>Payment</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data See here: http://static.springsource.org/spring-data/jpa/docs/current/reference/html/jpa.repositories.html#jpa.query-methods.query-creation
 *
 * @author Wavestone
 */
public interface PaymentRepository {

    /**
     * Save a <code>Payment</code> to the data store, either inserting or updating it.
     *
     * @param payment the <code>Payment</code> to save
     * @see BaseEntity#isNew
     */
    void save(Payment payment) throws DataAccessException;

    List<Payment> findByCardId(Integer cardId);

}
