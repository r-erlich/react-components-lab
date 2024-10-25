const WeatherForecasts = ({ forecasts }) => {
    return (
      <div>
        {forecasts.map((forecast, i) => (
          <div key={i}>
            <h2>{forecast.day}</h2>
            <img src={forecast.img} alt={forecast.imgAlt} />
            <p>{forecast.conditions}</p>
            <p>{forecast.time}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default WeatherForecasts;