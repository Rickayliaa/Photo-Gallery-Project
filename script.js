var photos = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7a/Bronx_Zoo_001.jpg",
    "https://content.fortune.com/wp-content/uploads/2015/02/145031081.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
    "https://www.history.com/.image/t_share/MTY1MTc1OTc1MjEzMDE2Mzc2/topic-brooklyn-bridge-gettyimages-91680627-promo.jpg",
    "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2020/05/10103209/bbg6.jpg",
    "https://media.timeout.com/images/105576649/630/472/image.jpg"
];

   photos.forEach(function(items,b){
	$(".place").append("<img src=" + photos[b] + ">");   
   });
 

$("button").click(function(){

    var inputValuee = $('.inputPlace').val();
    
    photos.push(inputValuee);
    
 console.log(photos);
    
		$(".place").empty();

  
photos.forEach(function(items,b){
    $(".place").append("<img src=" + photos[b] + ">");
    
});
    
    console.log(inputValuee);
    $(".inputPlace").val(""); 

});
