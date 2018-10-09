<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="advisors">
    <h2>Advisors</h2>

    <table id="advisorsTable" class="table table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Specialties</th>
        </tr>
        </thead>
        <tbody>
        <c:forEach items="${advisors.advisorList}" var="advisor">
            <tr>
                <td>
                    <c:out value="${advisor.firstName} ${advisor.lastName}"/>
                </td>
                <td>
                    <c:forEach var="specialty" items="${advisor.specialties}">
                        <c:out value="${specialty.name} "/>
                    </c:forEach>
                    <c:if test="${advisor.nrOfSpecialties == 0}">none</c:if>
                </td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

    <table class="table-buttons">
        <tr>
            <td>
                <a href="<spring:url value="/advisors.xml" htmlEscape="true" />">View as XML</a>
            </td>
            <td>
                <a href="<spring:url value="/advisors.json" htmlEscape="true" />">View as JSON</a>
            </td>
        </tr>
    </table>
</containerbank:layout>
