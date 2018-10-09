
package org.hackathon.packapp.containerbank.repository.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.CardType;
import org.hackathon.packapp.containerbank.repository.CardRepository;
import org.springframework.stereotype.Repository;

/**
 * JPA implementation of the {@link CardRepository} interface.
 *
 * @author Wavestone
 */
@Repository
public class JpaCardRepositoryImpl implements CardRepository {

    @PersistenceContext
    private EntityManager em;

    @Override
    @SuppressWarnings("unchecked")
    public List<CardType> findCardTypes() {
        return this.em.createQuery("SELECT ptype FROM CardType ptype ORDER BY ptype.name").getResultList();
    }

    @Override
    public Card findById(int id) {
        return this.em.find(Card.class, id);
    }

    @Override
    public void save(Card card) {
        if (card.getId() == null) {
            this.em.persist(card);
        } else {
            this.em.merge(card);
        }
    }

}
