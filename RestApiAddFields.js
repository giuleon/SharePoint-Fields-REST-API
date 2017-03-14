    function createLookup() {
        $.ajax({
            url: _spPageContextInfo.siteAbsoluteUrl + "/_api/web/lists/getbytitle('test')/fields/addfield",
            type: "POST",
            data: "{ 'parameters': { '__metadata': { 'type': 'SP.FieldCreationInformation' }, 'FieldTypeKind': 7, 'Title': 'Company', 'LookupListId': '87a5099f-012d-4853-a2f7-a36c92e35a73', 'LookupFieldName': 'Title' } }",
            headers: { 
                "X-RequestDigest": $("#__REQUESTDIGEST").val(),
                "accept": "application/json;odata=verbose",
                "content-type": "application/json;odata=verbose"
        },
            success: successHandler,
            error: errorHandler
        });
    }
    function successHandler() {
        alert("Lookup created successfully!");
    }
    function errorHandler(error) {
        alert(error);
    }
