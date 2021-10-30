var url = 'https://api.nytimes.com/svc/mostpopular/v2//shared/1/facebook.json?api-key=km4dU8u7GKZOHBARoACBYyVNbDLF7I5f';

$.getJSON(url, function (data) {
    console.log(data.results);

    pubInfo.innerHTML = `
   <p> ${data.copyright}</p>
    `
    var output = data.results;


    for (var i = 0; i < output.length; i++) {
        display.innerHTML +=
            `
       
       <h3> <a href="${output[i].url}">${output[i].title}</a></h3>
     
        <p class="info">${output[i].byline} 
       <br>
 Section: ${output[i].section}
 <br>
        ${output[i].abstract}
 </p>
 <br>
 <br>
       `;
    }
});