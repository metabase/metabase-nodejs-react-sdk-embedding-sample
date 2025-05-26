/// <reference types="vite/client" />

import {
  MetabaseProvider,
  InteractiveQuestion,
  defineMetabaseAuthConfig,
  defineMetabaseTheme, InteractiveDashboard,
} from "@metabase/embedding-sdk-react";
import { useMemo } from "react";
import { Redirect, Route, Switch, useSearchParams } from "wouter"

// Configuration
const config = defineMetabaseAuthConfig({
  metabaseInstanceUrl: import.meta.env.VITE_METABASE_INSTANCE_URL,
  authProviderUri: import.meta.env.VITE_AUTH_PROVIDER_URI,
});

const defaultQuestionId = 24;
const defaultDashboardId = 1;

const theme = defineMetabaseTheme({
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
    brand: "#2196F3",
    "text-primary": "#2C3E50",
    "text-secondary": "#607D8B",
    "text-tertiary": "#78909C",
    background: "#F5F7FA",
    "background-hover": "#E3E8EF",
    border: "#CFD8DC",
    filter: "#4CAF50",
    summarize: "#3F51B5",
    shadow: "rgba(0,0,0,0.1)",
  },

  components: {
    question: {
      backgroundColor: "#FFFFFF",
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
  },
});

function App() {
  const [searchParams] = useSearchParams()

  const { locale, questionId, dashboardId } = useMemo(() => ({
    locale: searchParams.get('locale') ?? null,
    questionId: parseInt(searchParams.get('questionId') || defaultQuestionId),
    dashboardId: parseInt(searchParams.get('dashboardId') || defaultDashboardId),
  }), [searchParams])

  return (
    <div className="App" style={{ width: "1200px", height: "800px" }}>
      <MetabaseProvider authConfig={config} theme={theme} locale={locale}>
        <Switch>
            <Route path="/" component={() => <Redirect to="/interactive-question" />} />
            <Route path="/interactive-question" component={() => <InteractiveQuestion questionId={questionId} />} />
            <Route path="/interactive-dashboard" component={() => <InteractiveDashboard dashboardId={dashboardId} withDownloads />} />
        </Switch>
      </MetabaseProvider>
    </div>
  );
}

export default App;
