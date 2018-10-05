<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>


<containerbank:layout pageName="customers">
    <jsp:attribute name="customScript">
        <script>
            $(function () {
                $("#date").datepicker({dateFormat: 'yy/mm/dd'});
            });
        </script>
    </jsp:attribute>
    <jsp:body>
        <h2><c:if test="${payment['new']}">New </c:if>Payment</h2>

        <b>Card</b>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Type</th>
                <th>Customer</th>
            </tr>
            </thead>
            <tr>
                <td><c:out value="${payment.card.name}"/></td>
                <td><containerbank:localDate date="${payment.card.birthDate}" pattern="yyyy/MM/dd"/></td>
                <td><c:out value="${payment.card.type.name}"/></td>
                <td><c:out value="${payment.card.customer.firstName} ${payment.card.customer.lastName}"/></td>
            </tr>
        </table>

        <form:form modelAttribute="payment" class="form-horizontal">
            <div class="form-group has-feedback">
                <containerbank:inputField label="Date" name="date"/>
                <containerbank:inputField label="Description" name="description"/>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <input type="hidden" name="cardId" value="${payment.card.id}"/>
                    <button class="btn btn-default" type="submit">Add Payment</button>
                </div>
            </div>
        </form:form>

        <br/>
        <b>Previous Payments</b>
        <table class="table table-striped">
            <tr>
                <th>Date</th>
                <th>Description</th>
            </tr>
            <c:forEach var="payment" items="${payment.card.payments}">
                <c:if test="${!payment['new']}">
                    <tr>
                        <td><containerbank:localDate date="${payment.date}" pattern="yyyy/MM/dd"/></td>
                        <td><c:out value="${payment.description}"/></td>
                    </tr>
                </c:if>
            </c:forEach>
        </table>
    </jsp:body>

</containerbank:layout>
