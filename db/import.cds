@cds.persistence.exists 
Entity BUYER {
 	BUILDING: String(10); 
	CITY: String(40); 
	COMPANYNAME: String(80); 
	COUNTRY: String(3); 
	EMAILADDRESS: String(255); 
	LEGALFORM: String(10);  
	key PARTNERID: Integer; 
	PARTNERROLE: String(3);  
	POSTALCODE: String(10);  
	REGION: String(4);  
	STREET: String(60);  
}