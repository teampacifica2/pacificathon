<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="home">
    <h2><fmt:message key="welcome"/></h2>
    <div class="row">
        <div class="col-md-12">
            <spring:url value="/resources/images/congrats.png" htmlEscape="true" var="congratsImage"/>
            <img class="img-responsive" src="${congratsImage}" width="10%"/>
        </div>
    </div>
</containerbank:layout>
