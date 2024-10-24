import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
// Import Material-UI icons
import PetsIcon from '@mui/icons-material/Pets'; // Importer l'icône Pets
import { Link } from "react-router-dom";
import PhotoSbai from "../images/veto10.jpg";
import { styled } from "@mui/material/styles";
import MyBlob from "../images/blob.svg";
import { theme } from "../../ThemeProvider";
import { FaTiktok } from "react-icons/fa";

import { Fade, Slide } from "react-awesome-reveal";
import InstagramIcon from "@mui/icons-material/Instagram";
import ReactPlayer from "react-player";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BackCards from "../images/wavesCards.svg";
import Backcircle from "../images/circle-scatter-haikei.svg";
// Styled component for hover effect
const CustomCard = styled(Card)(({ theme }) => ({
  transition: "0.3s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  backgroundImage: `url(${BackCards})`,
  backgroundSize: "cover",
  backgroundPosition: "bottom",
}));

// Styled component for social link background
const SocialLink = styled("a")(({ theme, gradient }) => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: gradient,
  color: "#fff",
  textDecoration: "none",
}));

function PresentationSection({ onNavigate }) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.one.main,
          backgroundImage: `url(${Backcircle})`,
          backgroundSize: "cover",
        }}
      >
        <Container sx={{ py: 3 }} maxWidth={"md"}>
          <Fade direction="up" className="">
            <Typography
              variant="h2"
              component="h2"
              textAlign="start"
              gutterBottom
              sx={{ color: theme.palette.four.main, fontWeight: "bold" }}
            >
              Dr ZAINABOU TOURE 
            </Typography>
          </Fade>
          <Typography
            variant="h4"
            component="h2"
            textAlign="start"
            gutterBottom
          >
            Docteur Veterinaire 
          </Typography>

          <Container className="text-center p-2">
            <div className="player-wrapper">
              <h4>Vidéo de présentation</h4>
              <br />
              <Paper sx={{ p: 3, mb: 4 }}>
                <ReactPlayer
                  className="react-player rounded-lg"
                  url="chemin/vers/votre/video.mp4"
                  width="100%"
                  height="100%"
                  controls={true}
                  // playing={true}
                  light={true}
                  pip={true}
                />
              </Paper>
            </div>

            <div className="flex items-center gap-4 justify-end mb-6">
              <SocialLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                gradient="linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
              >
                <InstagramIcon />
              </SocialLink>
              <SocialLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                gradient="linear-gradient(45deg, #69C9D0, #010101)"
              >
                <FaTiktok />
              </SocialLink>
            </div>
            <hr />
            <Typography
              variant="h3"
              component="h2"
              textAlign="start"
              gutterBottom
            >
              Nos activités 
            </Typography>
            <List sx={{ ml: 2 }}>
              {[
                "Profilaxie",
                "Traitement",
                "Chirurgie",
                "Service de santé",
                "Suivit de ferme ",
                "Gestion de troupeau rural, urbain ou mixte",
                
                
              ].map((text, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <Box display="flex" alignItems="center" gap={1}>
                        <DoneAllIcon />
                        {text}
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
            {/* <Container>
              <Typography
                variant="h3"
                component="h2"
                textAlign="start"
                gutterBottom
              >
                Accompagnements
              </Typography>
            </Container> */}

            <Grid container spacing={3} mt={3}>
              {[
                {
                  Icon: PetsIcon,
                  title: "Veto",
                  description:
                    "Les animaux, notre plus fidèle réconfort.",
                },
                {
                  Icon: PetsIcon,
                  title: "Veto",
                  description:
                    "S'occuper des animaux, c'est aimer sans limite.",
                },
                {
                  Icon: PetsIcon,
                  title: "Veto",
                  description:
                    "La véritable grandeur d'un homme se mesure à la manière dont il traite les animaux.",
                },
              ].map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Slide direction="down">
                    <CustomCard>
                      <CardContent
                        sx={{
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <service.Icon size={30} style={{ marginBottom: 10 }} />
                        <Typography
                          variant="h5"
                          component="h3"
                          className="line-clamp-1"
                        >
                          {service.title}
                        </Typography>
                        <Typography className="line-clamp-2">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </CustomCard>
                  </Slide>
                </Grid>
              ))}
            </Grid>
          </Container>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <Link to={"/"}>
              <button
                className="bn54 p-3"
                onClick={() => {
                  onNavigate("contact-section");
                }}
              >
                <span className="bn54span">Faire une Precomande en ligne </span>
              </button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Box sx={{ bgcolor: theme.palette.two.main, p: 6 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Cabinet Veterinaire
          <Box
            component="span"
            sx={{
              float: "right",
              ml: 2,
              backgroundImage: `url(${MyBlob})`,
              backgroundSize: "cover",
            }}
          >
            <Slide direction="left">
              <img
                src={PhotoSbai}
                alt="Kamsir"
                style={{ height: 300, maxWidth: "100%" }}
              />
            </Slide>
          </Box>
        </Typography>
        <Typography variant="h6" sx={{ textAlign: "justify", mt: 2, p: 3 }}>
         "Chez nous , nous veillons à la santé de vos animaux 
         avec une attention particulière. Notre service de prise 
         de rendez-vous en ligne simplifie vos visites, vous permettant
         de planifier les consultations
         à l avance et de garantir les meilleurs soins 
         pour vos compagnons à quatre pattes, sans tracas ."
        </Typography>
      </Box>
    </>
  );
}

export default PresentationSection;
