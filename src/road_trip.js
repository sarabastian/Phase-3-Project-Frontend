class RoadTrip {
    constructor(data) {
      this.id = data.id;
      this.destination = data.destination;
      this.itinerary = data.itinerary;
      this.expenses = data.expenses;
      RoadTrip.all.push(this);
    }
  
    renderListItem() {
      return `
        <li>
            <h2>${this.destination.location}</h2>
            <h3>${this.itinerary}
            <button>edit</button>
            </h3>
            <h4>Expenses - ${this.expenses}
            <button data-id=${this.id}>edit</button>
            </h4>
            
        </li>`
    
    }
  }
  
  RoadTrip.all = [];