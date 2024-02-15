class Fondo{
    
    constructor(nomCA, nomCapital){
        this.nomCA = nomCA;
        this.nomCapital = nomCapital;
        this.j=0; 
    }

    consulta(entrada){
        if(entrada == 2)
            this.j = this.j + 1;
        else if (entrada == 0)
            this.j = 0;
        else 
            this.j = this.j - 1;
        console.log(this.j)
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var self = this;
            $.getJSON(flickrAPI, 
                    {
                        tags: this.nomCA,
                        tagmode: "any",
                        format: "json"
                    })
                .done(function(data) {
                        $.each(data.items, function(i, item) {        
                            if ( i == self.j) {
                                var url = item.media.m.replace('_m','_b');
                                $('body').css('background-image', 'url(' + url + ')').css('background-size', 'cover');
                                return false;
                            }
                        });
            });
    }

}