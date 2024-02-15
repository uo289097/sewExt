class Fondo{
    
    constructor(nompais, nomCapital, long, lat){
        this.nompais = nompais;
        this.nomCapital = nomCapital;
        this.long = long;
        this.lat = lat; 
    }

    consulta(){
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
            $.getJSON(flickrAPI, 
                    {
                        tags: this.nompais,
                        tagmode: "any",
                        format: "json"
                    })
                .done(function(data) {
                        $.each(data.items, function(i, item) {          
                            if ( i === 13 ) {
                                var url = item.media.m.replace('_m','_b');
                                $('body').css('background-image', 'url(' + url + ')').css('background-size', 'cover');
                                return false;
                            }
                        });
            });
    }

}