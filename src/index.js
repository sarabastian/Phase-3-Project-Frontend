document.addEventListener('DOMContentLoaded', () => {
    const roadTripUrl = 'http://localhost:3000/api/v1/road_trips'
    fetch(roadTripUrl)
    .then(r => r.json())
    .then(json => {
        json.forEach(road_trip => {
        
        const newInfo = new RoadTrip(road_trip)
        const list = document.querySelector('#road_trip-list')
        list.innerHTML += newInfo.renderListItem()
        
        
    })

})
    
})