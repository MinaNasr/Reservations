export const getDate = (date) => {
    let d = new Date(date);
    return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear();

}

export const getTime = (date) => {
    let d = new Date(date);
    let minutes = d.getMinutes() === 0 ? '00' : d.getMinutes();
    return d.getHours() + ':' + minutes
}

export const aggregateTimeSlotsByDay = (timeslots) => {
    console.log('asds', timeslots);
    let obj = {};
    let datesSet = new Set()
    for(let i = 0 ; i < timeslots.length ; i++){
        datesSet.add(getWeekDay(timeslots[i].start_time));
    }
    let arr = [];
    for( let j = 0 ; j < Array.from(datesSet).length ; j++){
        for (let i = 0 ; i < timeslots.length ; i++){
            if(getWeekDay(timeslots[i].start_time) === Array.from(datesSet)[j]){
                arr.push([getTime(timeslots[i].start_time),getTime(timeslots[i].end_time),timeslots[i]])
            }
        }
        obj[Array.from(datesSet)[j]] = arr;
    }
    console.log('obj', obj)
    return obj;
}

export const sortTimeSlots = (timeslots) => {

}

export const getWeekDay = (date) => {
    let d = new Date(date);
    let dictionary = {
        0 : 'Sun',
        1 : 'Mon',
        2 : 'Tue',
        3 : 'Wed',
        4 : 'Thu',
        5 : 'Fri',
        6 : 'Sat'
    };
    return dictionary[d.getDay()];
}