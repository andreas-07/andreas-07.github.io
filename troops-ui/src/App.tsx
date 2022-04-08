import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme, ActionIcon,
} from '@mantine/core';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import MyCarousels from './home/cardCarousel';
import Roadmap from './roadmap/roadmap-tab';
import './App.css';
import Particles from 'react-tsparticles'

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const dark = colorScheme === 'dark';
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);


  return (<>
   
    <Router>
     
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }}>
          <AppShell
            styles={{
              main: {
                background: colorScheme === 'dark' ? theme.colors.green[1] : theme.colors.gray[3],
                height: "100% !important"
              },
            }}
            navbarOffsetBreakpoint="sm"
            fixed
            // navbar={
            //   <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
            //     <Navbar.Section><MainLinks /></Navbar.Section>
            //   </Navbar>
            // } aside={
            //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //     </Aside>
            //   </MediaQuery>
            // }
            // footer={
            //   <Footer height={60} p="md" color={dark ? 'white' : 'black'}>
            //     Application footer
            //   </Footer>
            // }
            header={
              <Header height={70} p="md" >
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="sm"
                      color={theme.colors.gray[6]}
                      mr="xl"
                    />
                  </MediaQuery>
                  <Text color={dark ? 'white' : 'black'}>
                    <div style={{ fontFamily: 'VT323', fontSize: "80px", margin: "0 auto" }}>eTroops</div></Text>

                  <div style={{ order: '2', marginLeft: 'auto' }}>
                    <ActionIcon
                      variant="outline"
                      color={dark ? 'yellow' : 'blue'}
                      onClick={() => toggleColorScheme()}
                      title="Toggle color scheme"
                    >
                      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                    </ActionIcon></div>
                </div>

              </Header>
            }
          > <Particles
          id="tsparticles"
          options={{
            "particles": {
              "number": {
                "value": 2,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#1b1e34"
              },
              "shape": {
                "type": "image",
                "stroke": {
                  "width": 0,
                  "color": "#000"
                },
                "polygon": {
                  "nb_sides": 4
                },
                "image": {
                  "src": "https://media.elrond.com/nfts/asset/QmeiuY5Sbd3NNkXNzZsxB7XTASUTc5Pyptiu9cEZVvKK47/39.png",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 60,
                "random": false,
                "anim": {
                  "enable": true,
                  "speed": 10,
                  "size_min": 40,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
              },
              "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": false,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
        />
            <div style={{ height: "100%" }}>
              <div style={{ height: "100%", width: "100%", marginTop: "20%" }}>
                <p></p>
                <MyCarousels></MyCarousels>
              </div>
              {/* , background:"#ccffcc" */}
              <div style={{ height: "100%", width: "100%", marginTop: "20%" }}>
                <Roadmap></Roadmap>
              </div>
            </div>

          </AppShell>
        </MantineProvider>
      </ColorSchemeProvider>
    </Router>
</>

  );
}

export default App;
