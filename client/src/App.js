import { MetabaseProvider, InteractiveQuestion } from "@metabase/embedding-sdk-react";

// Configuration
const config = {
  metabaseInstanceUrl: process.env.REACT_APP_METABASE_INSTANCE_URL,
  jwtProviderUri: process.env.REACT_APP_JWT_PROVIDER_URI
}

const questionId = 14;

const theme = {
  // Specify a font to use from the set of fonts supported by Metabase.
  // You can set the font to "Custom" to use the custom font
  // configured in your Metabase instance.
  fontFamily: "Lato",

  // Override the base font size for every component.
  // This does not usually need to be set, as the components
  // inherit the font size from the parent container, such as the body.
  fontSize: "16px",

  // Override the base line height for every component.
  lineHeight: 1.5,

  // Match your application's color scheme
  colors: {
    brand: "#d21238",
    "text-primary": "#441616",
    "text-secondary": "#8d1b01",
    "text-tertiary": "#1d78f0",
    background: "#f0dbdb",
    "background-hover": "#e2e1e1",
    border: "#3e0606",
    filter: "#b54504",
    summarize: "#3c680d",
    shadow: "rgba(0,0,0,0.08)",
  },

  table: {
    cell: {
      textColor: "#4C5773",
      backgroundColor: "#FFFFFF",
    },

    idColumn: {
      textColor: "#9B5966",
      backgroundColor: "#F5E9EB",
    },
  },
}

function App() {
  return (
    <div className="App" width="1200px" height="800px">
      <MetabaseProvider config={config} theme={theme}>
        <InteractiveQuestion questionId={questionId} />
      </MetabaseProvider>
    </div>
  );
}

export default App;
