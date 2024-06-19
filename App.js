import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WeatherInfo from "./src/components/weatherInfo";
import WeatherSearch from "./src/components/weatherSearch";

export default function App() {
  // const [data, setData] = useState([]);

  // const apiKey = "26ba691df300b9f89c4bd67b7a8096a3";
  // const location = "yogyakarta";
  // perintah untuk memanggil api dengan axios
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <View style={style.container}>
      <WeatherSearch />
      <WeatherInfo />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 18,
  },
});
