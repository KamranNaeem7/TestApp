import { WebView } from "react-native-webview";

function Home() {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: "https://www.electroinn.pk/" }}
    />
  );
}

export { Home };
