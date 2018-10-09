
package org.hackathon.packapp.containerbank.web;

import org.hackathon.packapp.containerbank.model.Card;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

/**
 * <code>Validator</code> for <code>Card</code> forms.
 * <p>
 * We're not using Bean Validation annotations here because it is easier to define such validation rule in Java.
 * </p>
 *
 * @author Wavestone
 */
public class CardValidator implements Validator {

    private static final String REQUIRED = "required";

    @Override
    public void validate(Object obj, Errors errors) {
        Card card = (Card) obj;
        String name = card.getName();
        // name validation
        if (!StringUtils.hasLength(name)) {
            errors.rejectValue("name", REQUIRED, REQUIRED);
        }

        // type validation
        if (card.isNew() && card.getType() == null) {
            errors.rejectValue("type", REQUIRED, REQUIRED);
        }

        // birth date validation
        if (card.getBirthDate() == null) {
            errors.rejectValue("birthDate", REQUIRED, REQUIRED);
        }
    }

    /**
     * This Validator validates *just* Card instances
     */
    @Override
    public boolean supports(Class<?> clazz) {
        return Card.class.isAssignableFrom(clazz);
    }


}
