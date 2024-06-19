import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WeatherInfo from "./src/components/weatherInfo";
import WeatherSearch from "./src/components/weatherSearch";
import { API_KEY, BASE_URL } from "./src/constant";

export default function App() {
  const searchWeather = (location) => {
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={style.container}>
      {/* Berikan function searchWeather ke component weatherSearch */}
      <WeatherSearch searchWeather={searchWeather} />
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
