
package org.hackathon.packapp.containerbank.service;

import java.util.Collection;

import org.springframework.dao.DataAccessException;
import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.CardType;
import org.hackathon.packapp.containerbank.model.Advisor;
import org.hackathon.packapp.containerbank.model.Payment;


/**
 * Mostly used as a facade so all controllers have a single point of entry
 *
 * @author Wavestone
 */
public interface BankService {

    Collection<CardType> findCardTypes() throws DataAccessException;

    Customer findCustomerById(int id) throws DataAccessException;

    Card findCardById(int id) throws DataAccessException;

    void saveCard(Card card) throws DataAccessException;

    void savePayment(Payment payment) throws DataAccessException;

    Collection<Advisor> findAdvisors() throws DataAccessException;

    void saveCustomer(Customer customer) throws DataAccessException;

    Collection<Customer> findCustomerByLastName(String lastName) throws DataAccessException;

	Collection<Payment> findPaymentsByCardId(int cardId);

}
