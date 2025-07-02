import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import MainLayout from "@/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";
import { AuthProvider } from "@/context/AuthContext";
import { store } from "@/redux/store";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <MainLayout>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </MainLayout>
      </AuthProvider>
    </Provider>
  );
}
