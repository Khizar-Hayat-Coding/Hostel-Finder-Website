
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

const hostels = [
    { name: 'Hostel 1', location: 'Lyari', price: 11500, image: 'h1.jpg' },
    { name: 'Hostel 2', location: 'Johar Town', price: 16000, image: 'h2.jpg' },
    { name: 'Hostel 3', location: 'Nazimabad', price: 27000, image: 'h3.jpg' },
    { name: 'Hostel 4', location: 'Clifton', price: 22500, image: 'h4.jpg' },
];

function filterHostels() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();
    const priceFilter = document.getElementById('price-filter').value;

    const filteredHostels = hostels.filter(hostel => {
        const matchesName = hostel.name.toLowerCase().includes(searchQuery);
        const matchesLocation = hostel.location.toLowerCase().includes(searchQuery);  
        const matchesPrice = priceFilter === 'all' || hostel.price <= parseInt(priceFilter);

        return (matchesName || matchesLocation) && matchesPrice;
    });

    displayHostels(filteredHostels);
}

function displayHostels(hostels) {
    const hostelListContainer = document.getElementById('filtered-hostels');
    hostelListContainer.innerHTML = ''; 

    if (hostels.length === 0) {
        hostelListContainer.innerHTML = '<p style="color: red; font-size: 18px; font-weight: bold;">No hostels found matching your criteria.</p>';
    } else {
        hostels.forEach(hostel => {
            const hostelCard = document.createElement('div');
            hostelCard.classList.add('hostel-card');
            hostelCard.innerHTML = `
                <img src="${hostel.image}" alt="${hostel.name}">
                <h3>${hostel.name}</h3>
                <p>Location: ${hostel.location}</p>
                <p>Price: ${hostel.price} PKR/month</p>
            `;
            hostelListContainer.appendChild(hostelCard);
        });
    }

    hostelListContainer.style.display = 'block';
}
