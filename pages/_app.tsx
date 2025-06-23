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
      <MainLayout>
        <AnimatePresence mode="wait">
          <AuthProvider>
            <Component {...pageProps} key={router.route} />
          </AuthProvider>
        </AnimatePresence>
      </MainLayout>
    </Provider>
  );
}
