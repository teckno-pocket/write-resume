import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Container,
  CssBaseline,
  Typography,
  AppBar,
  Toolbar,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme();

const RootContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  background: `linear-gradient(to bottom, ${theme.palette.primary.main}, #1518c094)`,
  color: theme.palette.common.white,
  fontFamily: 'Roboto, sans-serif',
  minWidth: '100vw',
  backgroundImage: `linear-gradient(to right, rgba(255,0,0,0), rgb(0 109 255))`
});

const HeaderContainer = styled(AppBar)({
    background: '#3127b040', // Different color for the header
  });

const HeaderTypography = styled(Typography)({
  marginBottom: '2rem',
  textAlign: 'center',
  color: '#5227b0', // Different color for the header
  fontSize: '2rem', // Set the default font size for desktop
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem', // Adjust font size for screens smaller than 'sm' (e.g., mobile devices)
  },
});

const MainContainer = styled(Container)({
  width: '100%', // Set width to 100%
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SectionContainer = styled('section')({
  background: theme.palette.background.paper,
  borderRadius: '10px',
  padding: '2rem',
  margin: '1rem 0',
  color: theme.palette.text.primary,
});

const FooterContainer = styled('footer')({
  padding: '2rem',
  marginTop: 'auto',
  background: '#1564c042',
  color: theme.palette.common.white,
});
const GridContainer = styled(Grid)({
    [theme.breakpoints.down('sm')]: {
      '& .MuiTypography-root': {
        fontSize: '1rem', // Adjust font size for screens smaller than 'sm' (e.g., mobile devices)
      },
    },
  });

const ResumeGeneratorPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootContainer>
        <CssBaseline />
        <Helmet>
          <title>Write-Resume.com | Generate Professional Resumes Effortlessly</title>
          <meta
            name="description"
            content="Create captivating resumes in minutes with Write-Resume.com. Choose from stunning templates, customize with ease, and download print-ready PDFs."
          />
          <meta name="keywords" content="resume generator, resume builder, resume templates, professional resumes" />
        </Helmet>

        <HeaderContainer position="sticky" elevation={0}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Write-Resume.com
            </Typography>
          </Toolbar>
        </HeaderContainer>

        <MainContainer>
          <HeaderTypography variant="h3">
            Your Personal Resume Generator
          </HeaderTypography>

          <GridContainer container spacing={3}>
            <Grid item xs={12} md={6}>
              <SectionContainer>
                <Typography variant="h4">
                  Key Functionalities
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText>Create Professional Resumes</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Choose from Various Templates</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Customize Colors and Fonts</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>AI-powered Content Generation</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Preview and Download as PDF</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Drag and Drop Editing</ListItemText>
                  </ListItem>
                </List>
              </SectionContainer>
            </Grid>
            <Grid item xs={12} md={6}>
              <SectionContainer>
                <Typography variant="h4">
                  Benefits
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText>Effortless Resume Creation</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Professional Templates Tailored for Different Jobs</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>AI Content Generation for Impressive Summaries</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Easy-to-Use Interface with Drag-and-Drop Editing</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Downloadable PDFs for Quick Sharing</ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText>Facilitates Easy Collaboration with Teammates</ListItemText>
                  </ListItem>
                </List>
              </SectionContainer>
            </Grid>
          </GridContainer>
        </MainContainer>

        <FooterContainer>
          <Typography variant="body2">&copy; 2023 Write-Resume.com. All rights reserved.</Typography>
        </FooterContainer>
      </RootContainer>
    </ThemeProvider>
  );
};

export default ResumeGeneratorPage;
