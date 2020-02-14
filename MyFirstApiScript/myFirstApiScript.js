function doSearch(){
	
    var searchbx = document.getElementById("searchbox"); // get the searchbox
    
    var searchterm = searchbx.value; // get the search term
   
    if (searchterm == ""){
    alert("Enter a search term"); // put up an explanation for the user
    return; // jump out of this funciton
   	
    $.ajax({
   
            url: 'http://dev.mobivat.com:8080/vsdc_module/mobivat/api/product/productId?upc=224444445',
    
            type: 'GET',
    	
            data: {q : searchterm},
    
            success: function(r){	
            displayResults(r);
            },
    
            error: function(e){
    
                alert("Something went wrong: " + e);	
            }
    	
    });
}
    }

    function displayResults(results){

        var showdiv = document.getElementById("resultsdiv");
        	
        showdiv.innerHTML = "";
        	
        var pnameInfo,pname ,descriptionInfo,description, quantityInfo, quantity; // create a variable or two
        	
        for (i=0; i< results.item.length; i++){
        	
        pnameInfo = results.item[i].contributor;
        	
        if (pnameInfo == undefined){
        	
            pnameInfo = "[No product listed]";
        	
        }
        	
        if ($.isArray(pnameInfo)){
        
        pname = pnameInfo.join("; ");
       
        }
       	
        else { // if it's not an Array
        
        pname = pnameInfo;
       	
        }
        	
        descriptionInfo = results.item[i].description;
        	
        if (descriptionInfo == undefined){
        	
            descriptionInfo = "[No description listed]";
        	
        }
        	
        if ($.isArray(descriptionInfo)){
        	
            description = descriptionInfo.join(" - ");
       
        }
       	
        else { // if it's not an Array
       
        description = descriptionInfo;
        	
        }
        quantityInfo = results.item[i].quantity;
        	
        if (quantityInfo == undefined){
        	
            quantityInfo = "[No quantity listed]";
        	
        }
        	
        if ($.isArray(quantityInfo)){
        	
            quantity = quantityInfo.join(" - ");
       
        }
       	
        else { // if it's not an Array
       
        quantity = quantityInfo;
        	
        }
        	
        var currentcontent = showdiv.innerHTML;	
        showdiv.innerHTML = currentcontent + "<div class='oneresult'><span class='descriptionclass'>" + description + "</span>, by <span class='pnameclass'>" + pnameInfo + "</span>,  by <span class='quantityclass'>" + quantityInfo + "</span></div>";	
        }	
        }
    