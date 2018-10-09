<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="customers">
    <h2>
        <c:if test="${customer['new']}">New </c:if> Customer
    </h2>
    <form:form modelAttribute="customer" class="form-horizontal" id="add-customer-form">
        <div class="form-group has-feedback">
            <containerbank:inputField label="First Name" name="firstName"/>
            <containerbank:inputField label="Last Name" name="lastName"/>
            <containerbank:inputField label="Address" name="address"/>
            <containerbank:inputField label="City" name="city"/>
            <containerbank:inputField label="Telephone" name="telephone"/>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <c:choose>
                    <c:when test="${customer['new']}">
                        <button class="btn btn-default" type="submit">Add Customer</button>
                    </c:when>
                    <c:otherwise>
                        <button class="btn btn-default" type="submit">Update Customer</button>
                    </c:otherwise>
                </c:choose>
            </div>
        </div>
    </form:form>
</containerbank:layout>
