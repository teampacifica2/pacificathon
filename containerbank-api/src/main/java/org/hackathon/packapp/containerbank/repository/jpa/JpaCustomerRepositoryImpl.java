
package org.hackathon.packapp.containerbank.repository.jpa;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.orm.hibernate5.support.OpenSessionInViewFilter;
import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.repository.CustomerRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA implementation of the {@link CustomerRepository} interface.
 *
 * @author Wavestone
 */
@Repository
public class JpaCustomerRepositoryImpl implements CustomerRepository {

    @PersistenceContext
    private EntityManager em;


    /**
     * Important: in the current version of this method, we load Customers with all their Cards and Payments while
     * we do not need Payments at all and we only need one property from the Card objects (the 'name' property).
     * There are some ways to improve it such as:
     * - creating a Ligtweight class (example here: https://community.jboss.org/wiki/LightweightClass)
     * - Turning on lazy-loading and using {@link OpenSessionInViewFilter}
     */
    @SuppressWarnings("unchecked")
    public Collection<Customer> findByLastName(String lastName) {
        // using 'join fetch' because a single query should load both customers and cards
        // using 'left join fetch' because it might happen that an customer does not have cards yet
        Query query = this.em.createQuery("SELECT DISTINCT customer FROM Customer customer left join fetch customer.cards WHERE customer.lastName LIKE :lastName");
        query.setParameter("lastName", lastName + "%");
        return query.getResultList();
    }

    @Override
    public Customer findById(int id) {
        // using 'join fetch' because a single query should load both customers and cards
        // using 'left join fetch' because it might happen that an customer does not have cards yet
        Query query = this.em.createQuery("SELECT customer FROM Customer customer left join fetch customer.cards WHERE customer.id =:id");
        query.setParameter("id", id);
        return (Customer) query.getSingleResult();
    }


    @Override
    public void save(Customer customer) {
        if (customer.getId() == null) {
            this.em.persist(customer);
        } else {
            this.em.merge(customer);
        }

    }

}
