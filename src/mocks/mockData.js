export const createMockWeatherData = overrides => ({
  "coord": {
    "lon": -122.68,
    "lat": 45.51
  },
  "weather": [{
    "id": 803,
    "main": "Clouds",
    "description": "broken clouds",
    "icon": "04d"
  }],
  "base": "stations",
  "main": {
    "temp": 44.64,
    "feels_like": 37.4,
    "temp_min": 39.99,
    "temp_max": 48,
    "pressure": 1019,
    "humidity": 65
  },
  "visibility": 16093,
  "wind": {
    "speed": 6.93
  },
  "clouds": {
    "all": 75
  },
  "dt": 1583696736,
  "sys": {
    "type": 1,
    "id": 6111,
    "country": "US",
    "sunrise": 1583678122,
    "sunset": 1583719652
  },
  "timezone": -25200,
  "id": 5746545,
  "name": "Portland",
  "cod": 200
});
