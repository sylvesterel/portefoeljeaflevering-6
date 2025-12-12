
async function loadEvents() {
    const response = await fetch('/events');
    const events = await response.json();
    console.log(events);

    const tbody = document.querySelector('.events-table tbody');
    tbody.innerHTML = "";


    // itererer igennem events og indsætter dem
    events[0].forEach(event => {

        // omformater datoen
        const dbDate = event.date;
        const dateInfoArray = dbDate.split("T");
        const dateForSite = dateInfoArray[0];

        // omformater tidspunkt
        const dbTime = event.time
        const timeInfoArray = dbTime.split(":")
        const timeForSite = timeInfoArray[0] + ":" + timeInfoArray[1]

        const isOurs = event.is_ours === 1

        console.log(event)

        if (isOurs) {

            const tr = document.createElement('tr');
            tr.classList.add("our-event")
            tr.innerHTML = `
            <td class="center-text">${dateForSite}</td>
            <td class="center-text">${timeForSite}</td>
            <td>${event.title}</td>
            <td>${event.place}</td>
            <td class="center-text"><a href="">${event.registration}</a></td>
        `;
            tbody.appendChild(tr);
        } else {
            const tr = document.createElement('tr');
            tr.classList.add("guest-event")
            tr.innerHTML = `
            <td class="center-text">${dateForSite}</td>
            <td class="center-text">${timeForSite}</td>
            <td>${event.title}</td>
            <td>${event.place}</td>
            <td class="center-text"><a href="">${event.registration}</a></td>
        `;
            tbody.appendChild(tr)
        }
    })
}

loadEvents()
