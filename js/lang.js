  		var arrLang = {
  			'en' : {
  				"home": "Home",
  				"about" : "About",
		        "committee" : "Committee",
		        "news" : "News",
		        "boardmember" : "Boardmember",
		        "gallery": "Gallery",
		        "contact": "Contact"
  			},
  			'np' : {
  				"home": "घर",
		        "about" : "बारे",
		        "committee" : "समिति",
		        "news" : "समाचार",
		        "boardmember" : "कार्यसमिति",
		        "gallery": "गैलरी",
		        "contact": "सम्पर्क"
  			}
  		}

  		$(function(){
  			$('.translate').click(function(){
  				var lang = $(this).attr('id');
  				$('.lang').each(function(index, element){
  					$(this).text(arrLang[lang][$(this).attr('key')]);
  				})
  			});
  		});