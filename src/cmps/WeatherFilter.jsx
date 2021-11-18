export const WeatherFilter = ({ onChangeFilter }) => {
  return (
    <select
      onChange={(ev) => onChangeFilter(ev.target.value)}
      name="countries"
      id="countries"
    >
      <option>-select a country-</option>
      <option value="2459115">New York</option>
      <option value="2442047">Los Angeles</option>
      <option value="610264">Marseille</option>
      <option value="753692">Barcelona</option>
      <option value="721943">Rome</option>
    </select>
  );
};
