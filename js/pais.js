class Pais{
    constructor(nombre, capital, poblacion, formaGobierno, religion){
        this._nombre = nombre;
        this._capital = capital;
        this._poblacion = poblacion;
        this._formaGobierno = formaGobierno;
        this._religion = religion;
    }

    get nombre(){
        return this._nombre;
    }

    get capital(){
        return this._capital;
    }

    get poblacion(){
        return this._poblacion;
    }

    get formaGobierno(){
        return this.formaGobierno;
    }

    get religion(){
        return this._religion;
    }

    infoPrincipal(){
        document.write("<ul><li>País: " + this._nombre + "</li>" +
        "<li>Capital: " + this._capital + " </li> " +
        "</ul>");
    }

    infoSecundaria(){
        document.write("<ul>" +
        "<li>Poblacion: "  + this._poblacion + "</li>" 
        + "<li>Forma de gobierno: "  + this._formaGobierno + "</li>"
        + "<li>Religion: "  + this._religion + "</li>" 
        + "</ul>"); 
    }

    cargarMeteorologia(){
        var apikey = "666e0e01010e08f014f7c118fb1dc962";
        var lat = -1.94995;
        var lon = 30.05885;
        var url = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat  
            + "&lon=" + lon + "&units=metric" + "&appid=" + apikey;
        $.ajax({
            dataType: "json",
            url: url,
            method: 'GET',
            success: function(datos){
                $("pre").text(JSON.stringify(datos, null, 2));
                for(let i = 0; i < datos.list.length; i++){
                    if(i%8 === 0){
                        var elemento = document.createElement("article");
                        $("section").append(elemento);
                        var tempMax = datos.list[i].main.temp_max + "°C"; 
                        var tempMin = datos.list[i].main.temp_min + "°C";
                        var humidity = datos.list[i].main.humidity + "%";
                        var rain = datos.list[i].rain && datos.list[i].rain['3h'] ? datos.list[i].rain['3h'] : 0.00;
                        var icon = datos.list[i].weather[0].icon;
                        console.log(icon);
                        var urlImagen = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
                        var fechaCompleta = datos.list[i].dt_txt;
                        var fecha = new Date(fechaCompleta);
                        var fechaFormateada = fecha.toLocaleDateString();
                        
                        var stringDatos = "<p>" + fechaFormateada + "</p>"; 
                        stringDatos += "<ul><li>Temp máxima: " + tempMax + "</li>";
                        stringDatos += "<li>Temp mínima: " + tempMin + "</li>";
                        stringDatos += "<li>Humedad: " + humidity + "</li>";
                        stringDatos += "<li>Lluvia: " + rain + "</li></ul>";
                        stringDatos += "<img alt='Meteorología' src=" + urlImagen + " >"

                        $(elemento).html(stringDatos);
                    }
                }
            }
        });
    }

}
var pais = new Pais("Ruanda", "Kigali", 13.46, "República", "Católica" );