$(document).ready(function(){
  // triples view ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  $("button.viewTriples").click(function(){
    $.ajax({type: "POST",url: 'http://localhost:5000/getRDF', success: function(response){

      htmlcode = "<html><head><title> View Triples </title></head><body> <h1> Welcome to Linked Data application.</h1> <p> Triples represented below are the information about the companies whose website you have visited in the past.</p> <table border='1'>" ;
      htmlcode = htmlcode + "<tr> <th> Subject </th> <th> Predicate </th> <th> Object </th> </tr>"
      for (var i = 0; i < response['results']['bindings'].length; i++) {
        htmlcode = htmlcode +"<tr> <td>" + response['results']['bindings'][i]['s']['value'] +"</td><td>"+ response['results']['bindings'][i]['p']['value'] +"</td><td>"+ response['results']['bindings'][i]['o']['value'] + "</td></td>";
      }
      htmlcode = htmlcode + "</table></body></html>" ;
      var url = "data:text/html," + encodeURIComponent(htmlcode);
      chrome.tabs.create({url: url});
    }});
  });
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // User profile ++++++++++++++++++++++++++++++++++++++++++++++++++++++
  $("button.userProfile").click(function(){
    chrome.tabs.create({'url':chrome.extension.getURL('userProfile.html')});
  });
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // Linked login ++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $("button.LInkedInLogin").click(function(){
      // $.ajax({
      //   method: "GET",
      // headers: {
      //     'Access-Control-Allow-Credentials' : true,
      //     'Access-Control-Allow-Origin':'*',
      //     'Access-Control-Allow-Methods':'GET',
      //     'Access-Control-Allow-Headers':'application/json'
      // },
      // url: "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77mpeeyrvnkjaa&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2FuserProfile&state=fooobar&scope=r_liteprofile%20r_emailaddress",
      // // data: { 
      // //   response_type: 'code',
      // //   client_id: '77mpeeyrvnkjaa', 
      // //   redirect_uri: 'http://localhost:5000/userProfile',
      // //   scope: 'r_emailaddress'},
      //   success: function(data) {
      //       document.getElementById("LILogIn").innerHTML = data
      //       // console.log(data)
      //       //chrome.tabs.create(data);
      //     }
      // });
      
      // //chrome.tabs.create({url:"http://localhost:5000/userProfile"});

      chrome.tabs.create({url: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77mpeeyrvnkjaa&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2FuserProfile&state=fooobar&scope=r_liteprofile%20r_emailaddress'})
    });
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++

});



