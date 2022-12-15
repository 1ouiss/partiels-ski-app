import { Box, Container, Typography } from "@mui/material";

const MainLayout = ({children}) => {
    return (
        <Container maxWidth="lg">
            <Box variant="header">
                <Typography variant="h5">
                    My ski app v1
                </Typography>
            </Box>
            <Box variant="section">
                {children}
            </Box>
        </Container>
    );
}
 
export default MainLayout;