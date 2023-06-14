export async function getAllEvents() {

  const events = await fetch('http://localhost:5000/api/v1/events');

  const { data } = await events.json();

  return data;
}

export async function getFeaturedEvents() {

  const events = await fetch('http://localhost:5000/api/v1/events/featured-events');

  const { data } = await events.json();
  return data;
}

export async function getEventById(id) {

  const events = await fetch(`http://localhost:5000/api/v1/events/${id}`);

  const { data } = await events.json();
  return data;
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}