import styles from "@/styles";
import { Card, CardHeader, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { slideIn, staggerContainer } from "@/utils/motion";
import React from "react";
import { TitleText, TypingText } from "@/components/CustomTexts";
import {
  ContactDetails,
  ContactForm,
  MobileContacts,
} from "@/components/contact";

const ContactPage = () => {
  const subHeader = (
    <TypingText title="| GET IN TOUCH WITH WILFRED " textStyles="text-center" />
  );
  const header = <TitleText title="CONTACT ME" textStyles="text-center" />;
  return (
    <Container id="contact" sx={{ m: "12vh 0" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <Card
          sx={{
            display: "flex",
            padding: "1rem",
            border: "1px solid primary",
            boxShadow: (theme) => theme.boxShadows.lg,
            borderRadius: (theme) => theme.borders.borderRadius.lg,
            backdropFilter: "blur(20px)",
          }}
        >
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <CardHeader
              title={header}
              subheader={subHeader}
              sx={{ display: "flex" }}
            />
          </motion.div>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                display: { xs: "none", md: "block" },
                appearance: { xs: "none", md: "auto" },
              }}
            >
              <ContactDetails />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: { xs: "block", md: "none" },
                appearance: { xs: "none", md: "auto" },
              }}
            >
              <MobileContacts />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </Container>
  );
};

export default ContactPage;
