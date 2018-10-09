<%@ tag trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="containerbank" tagdir="/WEB-INF/tags" %>

<%@ attribute name="pageName" required="true" %>
<%@ attribute name="customScript" required="false" fragment="true"%>

<!doctype html>
<html>
<containerbank:htmlHeader/>

<body>
<containerbank:bodyHeader menuName="${pageName}"/>

<div class="container-fluid">
    <div class="container xd-container">

        <jsp:doBody/>

    </div>
</div>
<containerbank:footer/>
<jsp:invoke fragment="customScript" />

</body>

</html>
