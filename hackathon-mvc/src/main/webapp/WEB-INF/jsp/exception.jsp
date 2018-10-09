<%@ page session="false" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<containerbank:layout pageName="error">

    <h2>Something happened...</h2>

    <p>${exception.message}</p>

</containerbank:layout>
