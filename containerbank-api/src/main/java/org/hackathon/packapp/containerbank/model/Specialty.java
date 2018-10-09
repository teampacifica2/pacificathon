
package org.hackathon.packapp.containerbank.model;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Models a {@link Advisor Advisor's} specialty (for example, realestate).
 *
 * @author Wavestone
 */
@Entity
@Table(name = "specialties")
public class Specialty extends NamedEntity {

}
