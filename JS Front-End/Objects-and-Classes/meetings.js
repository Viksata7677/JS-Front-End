function meetings(arr) {
    let dayMeetings = {};

    for (const string of arr) {
        let [day, meeting] = string.split(' ');

        if (day in dayMeetings) {
            console.log(`Conflict on ${day}!`);
        } else {
            dayMeetings[day] = meeting;
            console.log(`Scheduled for ${day}`);
        }

    }
    
    let entries = Object.entries(dayMeetings);

    for (const [day, name] of entries) {
        console.log(`${day} -> ${name}`);
    }
    
}