import { FC } from "react";
import { Text, useMantineTheme } from "@mantine/core";

interface MainLayoutProps {
    children: React.ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({children}) => {
    const theme = useMantineTheme();
  
    return (
        
      <div>
        <Text
          style={{
            position: "absolute",
            top: "20px",
            left: "78px",
            fontWeight: 700,
            fontSize: "64px",
            color: theme.colors.blue[0],
          }}
        >
          iLogix
        </Text>
        {children}
      </div>
    );

}
export default MainLayout;
