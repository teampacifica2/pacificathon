<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="customers">
    <jsp:attribute name="customScript">
        <script>
            $(function () {
                $("#birthDate").datepicker({dateFormat: 'yy/mm/dd'});
            });
        </script>
    </jsp:attribute>
    <jsp:body>
        <h2>
            <c:if test="${card['new']}">New </c:if> Card
        </h2>
        <form:form modelAttribute="card"
                   class="form-horizontal">
            <input type="hidden" name="id" value="${card.id}"/>
            <div class="form-group has-feedback">
                <div class="form-group">
                    <label class="col-sm-2 control-label">Customer</label>
                    <div class="col-sm-10">
                        <c:out value="${card.customer.firstName} ${card.customer.lastName}"/>
                    </div>
                </div>
                <containerbank:inputField label="Name" name="name"/>
                <containerbank:inputField label="Birth Date" name="birthDate"/>
                <div class="control-group">
                    <containerbank:selectField name="type" label="Type " names="${types}" size="5"/>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <c:choose>
                        <c:when test="${card['new']}">
                            <button class="btn btn-default" type="submit">Add Card</button>
                        </c:when>
                        <c:otherwise>
                            <button class="btn btn-default" type="submit">Update Card</button>
                        </c:otherwise>
                    </c:choose>
                </div>
            </div>
        </form:form>
        <c:if test="${!card['new']}">
        </c:if>
    </jsp:body>
</containerbank:layout>
