import {MantineProvider, MantineThemeProvider} from "@mantine/core";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import mainTheme from "@/theme/main-theme";
import React from "react";
import './../../public/Creato-Display/CreatoDisplay.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        }
    },
});
interface AppProvidersProps {
    children: React.ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={mainTheme}>
                    {children}
            </MantineProvider>
        </QueryClientProvider>
    );
}
export default AppProviders;