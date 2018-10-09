
package org.hackathon.packapp.containerbank.repository.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.hackathon.packapp.containerbank.model.Payment;
import org.hackathon.packapp.containerbank.repository.PaymentRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA implementation of the BankService interface using EntityManager.
 * <p/>
 * <p>The mappings are defined in "orm.xml" located in the META-INF directory.
 *
 * @author Wavestone
 */
@Repository
public class JpaPaymentRepositoryImpl implements PaymentRepository {

    @PersistenceContext
    private EntityManager em;


    @Override
    public void save(Payment payment) {
        if (payment.getId() == null) {
            this.em.persist(payment);
        } else {
            this.em.merge(payment);
        }
    }


    @Override
    @SuppressWarnings("unchecked")
    public List<Payment> findByCardId(Integer cardId) {
        Query query = this.em.createQuery("SELECT v FROM Payment v where v.card.id= :id");
        query.setParameter("id", cardId);
        return query.getResultList();
    }

}
