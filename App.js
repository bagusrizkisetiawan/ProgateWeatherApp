import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import WeatherInfo from "./src/components/weatherInfo";
import WeatherSearch from "./src/components/weatherSearch";
import { API_KEY, BASE_URL } from "./src/constant";
import { useState } from "react";
import axios from "axios";

export default function App() {
  // Definisikan state "weatherData" dan "setWeatherData"
  const [weatherData, setWeatherData] = useState();

  // Definisikan state status
  const [status, setStatus] = useState("");

  // Definisikan function renderComponent
  const renderComponent = () => {
    switch (status) {
      case "loading":
        return <ActivityIndicator size="large" />;
      case "success":
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        return (
          <Text>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return;
    }
  };

  // const searchWeather = (location) => {
  //   // Mengatur status ke "loading"
  //   setStatus("loading");

  //   axios
  //     .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
  //     .then((response) => {
  //       const data = response.data;
  //       // Tambahkan code di bawah
  //       data.visibility /= 1000;
  //       data.visibility = data.visibility.toFixed(2);
  //       data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
  //       data.main.temp = data.main.temp.toFixed(2);
  //       setWeatherData(data);
  //       // Mengatur status ke "success"
  //       setStatus("success");
  //     })
  //     .catch((error) => {
  //       // Mengatur status ke "error"
  //       setStatus("error");
  //     });
  // };

  //menggunakan fun async await
  const searchWeather = async (location) => {
    try {
      // Mengatur status ke "loading"
      setStatus("loading");
      const response = await axios.get(
        `${BASE_URL}?q=${location}&appid=${API_KEY}`
      );
      const data = response.data;
      // Tambahkan code di bawah
      data.visibility /= 1000;
      data.visibility = data.visibility.toFixed(2);
      data.main.temp -= 273.15; // Konversi Kelvin ke Celcius
      data.main.temp = data.main.temp.toFixed(2);
      setWeatherData(data);
      // Mengatur status ke "success"
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <View style={style.container}>
      {/* Berikan function searchWeather ke component weatherSearch */}
      <WeatherSearch searchWeather={searchWeather} />
      {/* Menggunakan function renderComponent di sini */}
      <View style={{ marginTop: 10 }}>{renderComponent()}</View>
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 18,
    flex: 1,
    justifyContent: "center",
  },
});
