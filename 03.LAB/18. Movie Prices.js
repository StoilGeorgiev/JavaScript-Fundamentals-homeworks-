/**
 * Created by Stoil Georgiev on 27-May-17.
 */
function gerMoviePrice(arr) {
    let [movie,day] = arr;
    let movieName = movie.toLowerCase();
    let weekday = day.toLowerCase();

    if (movieName == 'the godfather'){
        switch (weekday){
            case "monday": return 12;
            case "tuesday": return 10;
            case "wednesday": return 15;
            case "thursday": return 12.50;
            case "friday": return 15;
            case "saturday": return 25;
            case "sunday": return 30;
            default: return "error";
        }
    }
    else if (movieName == 'schindler\'s list'){
        switch (weekday){
            case "monday": return 8.50;
            case "tuesday": return 8.50;
            case "wednesday": return 8.50;
            case "thursday": return 8.50;
            case "friday": return 8.50;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return "error";
        }
    }
    else if (movieName == "casablanca"){
        switch (weekday){
            case "monday": return 8 ;
            case "tuesday": return 8;
            case "wednesday": return 8;
            case "thursday": return 8;
            case "friday": return 8;
            case "saturday": return 10;
            case "sunday": return 10;
            default: return "error";
        }
    }
    else if (movieName == 'the wizard of oz'){
        switch (weekday){
            case "monday": return 10;
            case "tuesday": return 10;
            case "wednesday": return 10;
            case "thursday": return 10;
            case "friday": return 10;
            case "saturday": return 15;
            case "sunday": return 15;
            default: return "error";
        }
    }
}
gerMoviePrice(['The Godfather','Friday']);