
package org.hackathon.packapp.containerbank.model;

import java.util.ArrayList;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * Simple domain object representing a list of advisors. Mostly here to be used for the 'advisors' {@link
 * org.springframework.web.servlet.view.xml.MarshallingView}.
 *
 * @author Wavestone
 */
@XmlRootElement
public class Advisors {

    private List<Advisor> advisors;

    @XmlElement
    public List<Advisor> getAdvisorList() {
        if (advisors == null) {
            advisors = new ArrayList<>();
        }
        return advisors;
    }

}
