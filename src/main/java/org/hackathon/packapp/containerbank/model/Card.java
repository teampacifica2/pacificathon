
package org.hackathon.packapp.containerbank.model;

import org.springframework.beans.support.MutableSortDefinition;
import org.springframework.beans.support.PropertyComparator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Simple business object representing a card.
 *
 * @author Wavestone
 */
@Entity
@Table(name = "cards")
public class Card extends NamedEntity {

    @Column(name = "birth_date")
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate birthDate;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private CardType type;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "card", fetch = FetchType.EAGER)
    private Set<Payment> payments;


    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public LocalDate getBirthDate() {
        return this.birthDate;
    }

    public CardType getType() {
        return this.type;
    }

    public void setType(CardType type) {
        this.type = type;
    }

    public Customer getCustomer() {
        return this.customer;
    }

    protected void setCustomer(Customer customer) {
        this.customer = customer;
    }

    protected Set<Payment> getPaymentsInternal() {
        if (this.payments == null) {
            this.payments = new HashSet<>();
        }
        return this.payments;
    }

    protected void setPaymentsInternal(Set<Payment> payments) {
        this.payments = payments;
    }

    public List<Payment> getPayments() {
        List<Payment> sortedPayments = new ArrayList<>(getPaymentsInternal());
        PropertyComparator.sort(sortedPayments, new MutableSortDefinition("date", false, false));
        return Collections.unmodifiableList(sortedPayments);
    }

    public void addPayment(Payment payment) {
        getPaymentsInternal().add(payment);
        payment.setCard(this);
    }

}
