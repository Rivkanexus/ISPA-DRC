function calculateDaysBetweenDates(begin, end) {    
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;
    var millisBetween = endDate.getTime() - beginDate.getTime();
    var days = millisBetween / millisecondsPerDay;
    return Math.floor(days);
}
