import { weatherService } from "../services/weatherService.js";
export const TimeData = () => {
  return (
    <>
      <div data-trans="time">
        time {weatherService.getData().time.substring(11, 16)}
      </div>
      <div data-trans="sunrise">
        sunrise {weatherService.getData().sun_rise.substring(11, 16)}
      </div>
      <div data-trans="sunset">
        sunset {weatherService.getData().sun_set.substring(11, 16)}
      </div>
    </>
  );
};
