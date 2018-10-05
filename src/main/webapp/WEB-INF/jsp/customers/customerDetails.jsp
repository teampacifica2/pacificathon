<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="customers">

    <h2>Customer Information</h2>


    <table class="table table-striped">
        <tr>
            <th>Name</th>
            <td><b><c:out value="${customer.firstName} ${customer.lastName}"/></b></td>
        </tr>
        <tr>
            <th>Address</th>
            <td><c:out value="${customer.address}"/></td>
        </tr>
        <tr>
            <th>City</th>
            <td><c:out value="${customer.city}"/></td>
        </tr>
        <tr>
            <th>Telephone</th>
            <td><c:out value="${customer.telephone}"/></td>
        </tr>
    </table>

    <spring:url value="{customerId}/edit.html" var="editUrl">
        <spring:param name="customerId" value="${customer.id}"/>
    </spring:url>
    <a href="${fn:escapeXml(editUrl)}" class="btn btn-default">Edit Customer</a>

    <spring:url value="{customerId}/cards/new.html" var="addUrl">
        <spring:param name="customerId" value="${customer.id}"/>
    </spring:url>
    <a href="${fn:escapeXml(addUrl)}" class="btn btn-default">Add New Card</a>

    <br/>
    <br/>
    <br/>
    <h2>Cards and Payments</h2>

    <table class="table table-striped">
        <c:forEach var="card" items="${customer.cards}">

            <tr>
                <td valign="top">
                    <dl class="dl-horizontal">
                        <dt>Name</dt>
                        <dd><c:out value="${card.name}"/></dd>
                        <dt>Birth Date</dt>
                        <dd><containerbank:localDate date="${card.birthDate}" pattern="yyyy-MM-dd"/></dd>
                        <dt>Type</dt>
                        <dd><c:out value="${card.type.name}"/></dd>
                    </dl>
                </td>
                <td valign="top">
                    <table class="table-condensed">
                        <thead>
                        <tr>
                            <th>Payment Date</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <c:forEach var="payment" items="${card.payments}">
                            <tr>
                                <td><containerbank:localDate date="${payment.date}" pattern="yyyy-MM-dd"/></td>
                                <td><c:out value="${payment.description}"/></td>
                            </tr>
                        </c:forEach>
                        <tr>
                            <td>
                                <spring:url value="/customers/{customerId}/cards/{cardId}/edit" var="cardUrl">
                                    <spring:param name="customerId" value="${customer.id}"/>
                                    <spring:param name="cardId" value="${card.id}"/>
                                </spring:url>
                                <a href="${fn:escapeXml(cardUrl)}">Edit Card</a>
                            </td>
                            <td>
                                <spring:url value="/customers/{customerId}/cards/{cardId}/payments/new" var="paymentUrl">
                                    <spring:param name="customerId" value="${customer.id}"/>
                                    <spring:param name="cardId" value="${card.id}"/>
                                </spring:url>
                                <a href="${fn:escapeXml(paymentUrl)}">Add Payment</a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>

        </c:forEach>
    </table>

</containerbank:layout>
