import {FC} from "react";
import {AppProps} from "next/app";
import AppProviders from "@/app";
import PageConfig from "@/pages/_app/PageConfig";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
    <>
        <AppProviders>
            <PageConfig>
                <Component {...pageProps} />
            </PageConfig>
        </AppProviders>
    </>
)
export default App;