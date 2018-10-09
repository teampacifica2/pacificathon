
package org.hackathon.packapp.containerbank.model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Digits;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;
import org.springframework.core.style.ToStringCreator;

/**
 * Simple JavaBean domain object representing an customer.
 *
 * @author Wavestone
 */
@Entity
@Table(name = "customers")
public class Customer extends Person {
    @Column(name = "address")
    @NotEmpty
    private String address;

    @Column(name = "city")
    @NotEmpty
    private String city;

    @Column(name = "telephone")
    @NotEmpty
    @Digits(fraction = 0, integer = 10)
    private String telephone;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    private Set<Card> cards;


    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTelephone() {
        return this.telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    protected Set<Card> getCardsInternal() {
        if (this.cards == null) {
            this.cards = new HashSet<>();
        }
        return this.cards;
    }

    protected void setCardsInternal(Set<Card> cards) {
        this.cards = cards;
    }

    public List<Card> getCards() {
        List<Card> sortedCards = new ArrayList<>(getCardsInternal());
        PropertyComparator.sort(sortedCards, new MutableSortDefinition("name", true, true));
        return Collections.unmodifiableList(sortedCards);
    }

    public void addCard(Card card) {
        getCardsInternal().add(card);
        card.setCustomer(this);
    }

    /**
     * Return the Card with the given name, or null if none found for this Customer.
     *
     * @param name to test
     * @return true if card name is already in use
     */
    public Card getCard(String name) {
        return getCard(name, false);
    }

    /**
     * Return the Card with the given name, or null if none found for this Customer.
     *
     * @param name to test
     * @return true if card name is already in use
     */
    public Card getCard(String name, boolean ignoreNew) {
        name = name.toLowerCase();
        for (Card card : getCardsInternal()) {
            if (!ignoreNew || !card.isNew()) {
                String compName = card.getName();
                compName = compName.toLowerCase();
                if (compName.equals(name)) {
                    return card;
                }
            }
        }
        return null;
    }

    @Override
    public String toString() {
        return new ToStringCreator(this)

            .append("id", this.getId())
            .append("new", this.isNew())
            .append("lastName", this.getLastName())
            .append("firstName", this.getFirstName())
            .append("address", this.address)
            .append("city", this.city)
            .append("telephone", this.telephone)
            .toString();
    }
}
