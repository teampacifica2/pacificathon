
package org.hackathon.packapp.containerbank.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DataAccessException;
import org.hackathon.packapp.containerbank.model.Customer;
import org.hackathon.packapp.containerbank.model.Card;
import org.hackathon.packapp.containerbank.model.CardType;
import org.hackathon.packapp.containerbank.model.Advisor;
import org.hackathon.packapp.containerbank.model.Payment;
import org.hackathon.packapp.containerbank.repository.CustomerRepository;
import org.hackathon.packapp.containerbank.repository.CardRepository;
import org.hackathon.packapp.containerbank.repository.AdvisorRepository;
import org.hackathon.packapp.containerbank.repository.PaymentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Mostly used as a facade for all ContainerBank controllers
 * Also a placeholder for @Transactional and @Cacheable annotations
 *
 * @author Wavestone
 */
@Service
public class BankServiceImpl implements BankService {

    private CardRepository cardRepository;
    private AdvisorRepository advisorRepository;
    private CustomerRepository customerRepository;
    private PaymentRepository paymentRepository;

    @Autowired
    public BankServiceImpl(CardRepository cardRepository, AdvisorRepository advisorRepository, CustomerRepository customerRepository, PaymentRepository paymentRepository) {
        this.cardRepository = cardRepository;
        this.advisorRepository = advisorRepository;
        this.customerRepository = customerRepository;
        this.paymentRepository = paymentRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<CardType> findCardTypes() throws DataAccessException {
        return cardRepository.findCardTypes();
    }

    @Override
    @Transactional(readOnly = true)
    public Customer findCustomerById(int id) throws DataAccessException {
        return customerRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Collection<Customer> findCustomerByLastName(String lastName) throws DataAccessException {
        return customerRepository.findByLastName(lastName);
    }

    @Override
    @Transactional
    public void saveCustomer(Customer customer) throws DataAccessException {
        customerRepository.save(customer);
    }


    @Override
    @Transactional
    public void savePayment(Payment payment) throws DataAccessException {
        paymentRepository.save(payment);
    }


    @Override
    @Transactional(readOnly = true)
    public Card findCardById(int id) throws DataAccessException {
        return cardRepository.findById(id);
    }

    @Override
    @Transactional
    public void saveCard(Card card) throws DataAccessException {
        cardRepository.save(card);
    }

    @Override
    @Transactional(readOnly = true)
    @Cacheable(value = "advisors")
    public Collection<Advisor> findAdvisors() throws DataAccessException {
        return advisorRepository.findAll();
    }

	@Override
	public Collection<Payment> findPaymentsByCardId(int cardId) {
		return paymentRepository.findByCardId(cardId);
	}


}
