import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./Questions.css";

export default function Questions() {
  return (
    <div className="questions bg-gmelo mt-16 ">
      <div className="container">
        <div className="questions-content ">
          <h1 className="w-[380px] h-[40px] bg-bg flex items-center justify-center mx-auto text-text font-bold rounded-b-lg shadow-lg text-xs md:text-sm">پرسش های متداول</h1>
          <div className="py-5 w-full md:w-[50%] mx-auto ">
            <Accordion className="mb-1 bg-gmain font-roya">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>چگونه می‌توانم کتاب را سفارش دهیم؟</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-bg rounded-b-lg">
                <Typography >
                برای سفارش کتاب، به صفحه محصول موردنظر بروید و دکمه "افزودن به سبد خرید" را کلیک کنید و سپس فرآیند پرداخت را تکمیل کنید.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-1 bg-gmain">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography> آیا امکان تحویل رایگان وجود دارد؟</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-bg  rounded-b-lg">
                <Typography>
                برای خرید‌های بیش از 100 دلار ارسال رایگان است.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-1 bg-gmain">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>آیا امکان ارسال کتاب به خارج از کشور وجود دارد؟</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-bg  rounded-b-lg">
                <Typography>
                بله، ما برای مشتریان خارج از کشور نیز خدمات ارسال داریم.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-1 bg-gmain">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>آیا کتاب‌ها به صورت هدیه برای دیگران ارسال می‌شوند؟</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-bg  rounded-b-lg">
                <Typography>
                بله، شما می‌توانید کتاب‌ها را به عنوان هدیه برای دیگران ارسال کنید.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className="mb-1 bg-gmain">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>چگونه می‌توانم کتاب‌های جدید را دنبال کنم؟</Typography>
              </AccordionSummary>
              <AccordionDetails className="bg-bg  rounded-b-lg">
                <Typography>
                با عضویت در خبرنامه ما یا دنبال کردن صفحات ما در شبکه‌های اجتماعی، می‌توانید از کتاب‌های جدید باخبر شوید.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
