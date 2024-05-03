import { Typography } from "@mui/material"
import { Box, Container } from "@mui/system"


const About = () => {
  return (
    <>
<Container maxWidth='md' sx={{
            bgcolor: 'background.paper',
            boxShadow: 2,
            my: 10,
            py:10
        }}>
<div align="center">
  <a href="/">
    <img src="/static/logo.png" alt="Logo" width="80" height="80"/>
  </a>

  <h2 align="center">JustSettle</h2>

  <p align="center">
    Build with the MERN stack (MongoDB, Express, React and NodeJS).
    <br />
    <br/>

    <br/>
   
  </p>
</div>
<br/>

<Typography variant="h5">
MERN Stack Group Expense Splitting Application
</Typography>
<br/>
<ul style={{marginLeft: '40px'}}>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#key-features">Key Features</a></li>
<li><a href="#technologies-used">Technologies used</a>
<ul style={{marginLeft: '40px'}}>
<li><a href="#frontend">Frontend</a></li>
<li><a href="#backend">Backend</a></li>
<li><a href="#database">Database</a></li>
</ul>
</li>

</ul>
<br/>
<h2 id="introduction">Introduction</h2>
<br/>
<p> A full stack expense spliting app - splitwise clone made using the MERN stack (MongoDB, Express, React &amp; Nodejs), specially designed to split group expense between friends, but can be used for almost any type of business need. With this application, you can add your expense details and get an whole expense analytics feature - Group Balance, Monthly amount spend, Catagory wise expense spending graph etc... <a href="https://github.com/tuzup/SplitApp/">Source code</a>.</p>
<br/>

<h2 id="key-features">Key Features</h2>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>Create user groups and track group expense </li>
<li>Keep track of shared expenses and settle your corresponding balances in a convenient and personalized way. </li>
<li>Get Analytical graphs to understand your expenditure trend </li>
<li>Multiple user registration.</li>
<li>Authentication using JSON web token (JWT) </li>
</ul>
<br/>
<h2 id="technologies-used">Technologies used</h2>
<br/>
<p>This project was created using the following technologies.</p>
<br/>
<h4 id="frontend">Frontend</h4>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>React JS</li>
<li>Redux (for managing and centralizing application state)</li>
<li>Axios (for making api calls)</li>
<li>Material UI (for User Interface)</li>
<li>Chart.js (To display various analytics graphs)</li>
<li>React-chartjs-2  </li>
<li>Gravitar (for user profile picture)</li>
</ul>
<br/>
<h4 id="backend">Backend</h4>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>Express</li>
<li>Mongoose</li>
<li>JWT (For authentication)</li>
<li>bcryptjs (for data encryption)</li>
</ul>
<br/>
<h4 id="database">Database</h4>
<br/>
<ul style={{marginLeft: '40px'}}>
<li>MongoDB (MongoDB Atlas)</li>
</ul>
<br/>

</Container>
 </>
  )
}

export default About