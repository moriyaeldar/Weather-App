export const WeatherFilter = ({ onChangeFilter }) => {
  return (
    <select
      onChange={(ev) => onChangeFilter(ev.target.value)}
      name="countries"
      id="countries"
    >
      <option data-trans="select">-select a country-</option>
      <optgroup label="United State" data-trans="State">
      <option value="2459115" data-trans="new">New York</option>
      <option value="2442047" data-trans="los">Los Angeles</option>
     </optgroup>
     <optgroup label="Europe" data-trans="Europe">
      <option value="610264" data-trans="Marseille">Marseille</option>
      <option value="753692" data-trans="Barcelona">Barcelona</option>
      <option value="721943" data-trans="Rome">Rome</option>
     </optgroup>
    </select>
  );
};
