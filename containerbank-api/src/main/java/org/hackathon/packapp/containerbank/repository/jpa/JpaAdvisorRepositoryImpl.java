
package org.hackathon.packapp.containerbank.repository.jpa;

import org.hackathon.packapp.containerbank.model.Advisor;
import org.hackathon.packapp.containerbank.repository.AdvisorRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * JPA implementation of the {@link AdvisorRepository} interface.
 *
 * @author Wavestone
 */
@Repository
public class JpaAdvisorRepositoryImpl implements AdvisorRepository {

	final Logger logger = LoggerFactory.getLogger(JpaAdvisorRepositoryImpl.class);

    @PersistenceContext
    private EntityManager em;


    @Override
    @SuppressWarnings("unchecked")
    public Collection<Advisor> findAll() {
		logger.info("Calling advisor respository");
        return this.em.createQuery("SELECT distinct advisor FROM Advisor advisor left join fetch advisor.specialties ORDER BY advisor.lastName, advisor.firstName").getResultList();
    }

}
