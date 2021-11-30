export const WeatherFilter = ({ onChangeFilter }) => {
  const US=[{"name":"New York","value":"2459115","trans":"new"},{"name":"Los Angeles","value":"2442047","trans":"los"}]
  const EU=[{"name":"Marseille","value":"610264","trans":"Marseille"},{"name":"Barcelona","value":"753692","trans":"Barcelona"},{"name":"Rome","value":"721943","trans":"Rome"}]
  return (
    <select
      onChange={(ev) => onChangeFilter(ev.target.value)}
      name="countries"
      id="countries"
    >
      <option data-trans="select">-select a country-</option>
      <optgroup label="United State" data-trans="State"></optgroup>
      {US.map(city=><option value={city.value} data-trans={city.trans}>{city.name}</option>)}
      <optgroup label="Europe" data-trans="Europe"></optgroup>
      {EU.map(city=><option value={city.value} data-trans={city.trans}>{city.name}</option>)}
    </select>
  );
};
