(function() {
    // Part ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

    // CREATE A HOTEL OBJECT USING ONJECT LITERAL SYNTAX

    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function() {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    // Place hotel object information in the correct html elements

    var hotelName, roomRate,spcialRate;

    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

    // PART 2: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var expiryMsg;
    var today;
    var elEnds;

    // This function takes the CURRENT DATE every single time, 
    //so you will always see an expire date 7 days from the current day
    function offerExpires(today) {
        // Declare variable within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date (today.getTime() + (7 * 24 * 60 * 60 * 1000));
        // Create array to hold the names of days / months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        // Collect the parts of the date to put on the page
        // These date Methods return a integer that corresponds to a date value, 
        //inorder to access their writen name you must make a corresponding array for it to balance against
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Make the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

    // Finish the immediately inviked fuction expression by add () to indicate immediate firing
}());