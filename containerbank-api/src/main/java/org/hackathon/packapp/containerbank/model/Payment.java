
package org.hackathon.packapp.containerbank.model;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;

/**
 * Simple JavaBean domain object representing a payment.
 *
 * @author Wavestone
 */
@Entity
@Table(name = "payments")
public class Payment extends BaseEntity {

    /**
     * Holds value of property date.
     */
    @Column(name = "payment_date")
    @DateTimeFormat(pattern = "yyyy/MM/dd")
    private LocalDate date;

    /**
     * Holds value of property description.
     */
    @NotEmpty
    @Column(name = "description")
    private String description;

    /**
     * Holds value of property card.
     */
    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;


    /**
     * Creates a new instance of Payment for the current date
     */
    public Payment() {
        this.date = LocalDate.now();
    }


    /**
     * Getter for property date.
     *
     * @return Value of property date.
     */
    public LocalDate getDate() {
        return this.date;
    }

    /**
     * Setter for property date.
     *
     * @param date New value of property date.
     */
    public void setDate(LocalDate date) {
        this.date = date;
    }

    /**
     * Getter for property description.
     *
     * @return Value of property description.
     */
    public String getDescription() {
        return this.description;
    }

    /**
     * Setter for property description.
     *
     * @param description New value of property description.
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Getter for property card.
     *
     * @return Value of property card.
     */
    public Card getCard() {
        return this.card;
    }

    /**
     * Setter for property card.
     *
     * @param card New value of property card.
     */
    public void setCard(Card card) {
        this.card = card;
    }

}
