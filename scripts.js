const tours = [
    {
      name: "Paris, France",
      description: "Experience the romance of the Eiffel Tower, fine wine, and world-class museums.",
      image: "https://source.unsplash.com/featured/?paris"
    },
    {
      name: "Kyoto, Japan",
      description: "Explore ancient temples, cherry blossoms, and traditional culture in Kyoto.",
      image: "https://source.unsplash.com/featured/?kyoto"
    },
    {
      name: "New York, USA",
      description: "Discover the fast-paced life of the Big Apple with skyscrapers, shows, and more.",
      image: "https://source.unsplash.com/featured/?newyork"
    }
  ];
  
  const container = document.getElementById("tourContainer");
  
  tours.forEach(tour => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${tour.image}" alt="${tour.name}">
      <div class="card-content">
        <h2>${tour.name}</h2>
        <p>${tour.description}</p>
        <button onclick="alert('Booking for ${tour.name} coming soon!')">Book Now</button>
      </div>
    `;
  
    container.appendChild(card);
  });
  