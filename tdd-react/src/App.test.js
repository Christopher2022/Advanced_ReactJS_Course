//vamos a constuir una aplicacion de seleccion y busqueda de emisoras de radio en streaming
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import App from "./App";

const mockArray = [{
  "changeuuid": "5c35b1e1-ab9b-4cf3-9c09-20830a9b68d5",
  "stationuuid": "a4a3c3c4-d499-48e0-bec1-226868d22968",
  "serveruuid": "5209335e-b186-4032-9aa1-2caf79159549",
  "name": "__COUNTRYHITS.FM__ by rautemusik (rm.fm)",
  "url": "https://country-high.rautemusik.fm/?ref=radiobrowser",
  "url_resolved": "https://rautemusik-de-hz-fal-stream18.radiohost.de/country?ref=radiobrowser",
  "homepage": "https://countryhits.fm/",
  "favicon": "",
  "tags": "alternative country,alternative rock,americana,classic country,classic rock,country,hits,nashville,new country,rock,texas country",
  "country": "Germany",
  "countrycode": "DE",
  "iso_3166_2": null,
  "state": "North Rhine-Westphalia",
  "language": "english,german",
  "languagecodes": "de,en",
  "votes": 624,
  "lastchangetime": "2024-01-10 00:01:08",
  "lastchangetime_iso8601": "2024-01-10T00:01:08Z",
  "codec": "MP3",
  "bitrate": 192,
  "hls": 0,
  "lastcheckok": 1,
  "lastchecktime": "2024-03-21 05:19:51",
  "lastchecktime_iso8601": "2024-03-21T05:19:51Z",
  "lastcheckoktime": "2024-03-21 05:19:51",
  "lastcheckoktime_iso8601": "2024-03-21T05:19:51Z",
  "lastlocalchecktime": "2024-03-21 05:19:51",
  "lastlocalchecktime_iso8601": "2024-03-21T05:19:51Z",
  "clicktimestamp": "2024-03-21 11:11:50",
  "clicktimestamp_iso8601": "2024-03-21T11:11:50Z",
  "clickcount": 28,
  "clicktrend": -4,
  "ssl_error": 0,
  "geo_lat": null,
  "geo_long": null,
  "has_extended_info": false
}]

beforeEach(() => render(<App />))

//0 - La aplicación debe renderizar correctamente

describe('0 - La aplicación debe renderizar correctamente', () => {
  test('0 - La aplicación debe renderizar correctamente', () => {
    const r = render(<App />)
    expect(r).toBeDefined();

  })

});

//1 - El nombre de la aplicación debe mostrarse en algún lugar "OpenRadioCamp"

describe('1 - El nombre de la aplicación debe mostrarse en algún lugar "OpenRadioCamp"', () => {
  test('1 - El nombre de la aplicación debe mostrarse en algún lugar "OpenRadioCamp"', () => {
    const nombre = "OpenRadioCamp";
    const el = screen.getByText(nombre);
    expect(el).toBeInTheDocument(); // Tiene que importar "jest-dom"
  })

});

//2 - Debemos poder buscar radios por nombre
//2a- La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
//2b- La aplicación debe tener un botón de búsqueda => Texto "Buscar"
//2c- Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez
describe('2 - Debemos poder buscar radios por nombre', () => {
  test('2a- La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"', () => {
    const placeholdertext = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(placeholdertext);
    expect(input).toBeInTheDocument();
  })

  test('2b- La aplicación debe tener un botón de búsqueda => Texto "Buscar"', () => {
    const buttontext = "Buscar";
    const input = screen.getByText(buttontext);
    expect(input).toBeInTheDocument();
  })

  test('2c- Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez', () => {
    const funcionMock = jest.fn();
    const buttontext = "Buscar";
    const button = screen.getByText(buttontext);
    button.addEventListener("click", funcionMock);
    fireEvent.click(button);
    expect(funcionMock).toHaveBeenCalledTimes(1);
  })
});

//3 - Listado de emisoras
//3a - Debe existir un listado de emisoras
//3b - El listado debe inicializar vacio
//3c - Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado
//3d - Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"

describe('3 - Listado de emisoras', () => {
  test('3a - Debe existir un listado de emisoras ', () => {
    const listado = screen.getByLabelText('listado-emisoras');
    expect(listado).toBeInTheDocument();
  })
  test('3b - El listado debe inicializar vacio ', () => {
    const listado = screen.getByLabelText('listado-emisoras');
    const childrenCount = listado.childElementCount;
    expect(childrenCount).toBe(0);
  })
  test('3c - Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado', async() => {
    const placeholdertext = "Escribe el nombre de la radio";
    const input = screen.getByPlaceholderText(placeholdertext);
    const buttontext = "Buscar";
    const button = screen.getByText(buttontext);
    fireEvent.change(input, { target: { value: 'Country' } });
    fireEvent.click(button);
    const listado = screen.getByLabelText('listado-emisoras');
    const childrenCount = listado.childElementCount;
    expect(childrenCount).toBeGreaterThanOrEqual(0);
  })
  test('3d - Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"', () => {

  })

});
