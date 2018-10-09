<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="customers">
    <h2>Customers</h2>

    <table id="customersTable" class="table table-striped">
        <thead>
        <tr>
            <th style="width: 150px;">Name</th>
            <th style="width: 200px;">Address</th>
            <th>City</th>
            <th style="width: 120px">Telephone</th>
            <th>Cards</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${selections}" var="customer">
            <tr>
                <td>
                    <spring:url value="/customers/{customerId}.html" var="customerUrl">
                        <spring:param name="customerId" value="${customer.id}"/>
                    </spring:url>
                    <a href="${fn:escapeXml(customerUrl)}"><c:out value="${customer.firstName} ${customer.lastName}"/></a>
                </td>
                <td>
                    <c:out value="${customer.address}"/>
                </td>
                <td>
                    <c:out value="${customer.city}"/>
                </td>
                <td>
                    <c:out value="${customer.telephone}"/>
                </td>
                <td>
                    <c:forEach var="card" items="${customer.cards}">
                        <c:out value="${card.name} "/> / 
                    </c:forEach>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>
</containerbank:layout>
