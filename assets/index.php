<!DOCTYPE html>
<html>
<head>
  <title>Vaughn Paulger</title>
  <link href="dist/css/style.scss" type="text/css" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="slick/slick.css"/>
  <link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
</head>

<body>
  <header>
    <!-- <div id="backgroundDiv"> -->
    <a href="index.html">
      <img id="vaughnPaulgerLogo" src="./assets/vaughnPaulgerLogo.png" alt="Vaughn Paulger">
    
    <h1>WEB DEVELOPER
      <!-- <a href="https://www.linkedin.com/in/vaughn-paulger-b2a3aba3/" target="_blank">
        <i class="fab fa-linkedin"></i>
      </a> -->
    </h1>
    </a>
    <ul class="landingNavigation navigation">
      <li><a class="navLinks" id="about">ABOUT</a></li>
      <li><a class="navLinks" id="experience">EXPERIENCE</a></li>
      <li><a class="navLinks" id="contact">CONTACT</a></li>
    </ul>
    <!-- </div> -->
  </header>
  
  <div id="flexboxWrapper">
    <section id="aboutSection">
      <!-- <ul class="secondNavigation navigation">
        <li><a class="navLinks" id="about2">ABOUT</a></li>
        <li><a class="navLinks" id="experience2">EXPERIENCE</a></li>
        <li><a class="navLinks" id="contact2">CONTACT</a></li>
      </ul> -->
      <ul class="testNav">
        <li><a id="about2">About</a></li>
        <li><a id="experience2">Experience</a></li>
        <li><a id="contact2">Contact</a></li>
      </ul>
      <div id="aboutContainer">    
        <img id="selfPortrait" src="./assets/selfPortrait_revised.jpg">
        <div id="textBox">
          <p>Hi, my name is Vaughn.<br>
            I am an explorer who likes to push the boundaries of design and adventure.<br>
            Lets create some cool things together!</p>
        </div>
      </div>
    </section>

    <section id="experienceSection">
      <!-- <ul class="secondNavigation navigation">
        <li><a id="about2">ABOUT</a></li>
        <li><a id="experience2">EXPERIENCE</a></li>
        <li><a id="contact2">CONTACT</a></li>
      </ul> -->
      <ul class="testNav">
          <li><a id="about2">About</a></li>
          <li><a id="experience2">Experience</a></li>
          <li><a id="contact2">Contact</a></li>
        </ul>
      <div class="experienceContainer">
        <div class="experienceBlocks">
          <a href="http://leanelson.com/" target="_blank">
            <div class="image1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src="https://static.wixstatic.com/media/88e735_95c73fbd281e47058ad1155c56d52987~mv2.png/v1/crop/x_365,y_0,w_933,h_933/fill/w_164,h_164,al_c,usm_0.66_1.00_0.01/88e735_95c73fbd281e47058ad1155c56d52987~mv2.png">
            </div>
          </a>
          <h3>Lea Nelson Couture</h3>
          <p>Web Design & Development</p>
        </div>
        <div class="experienceBlocks">
          <a href="vaughn-paulger-project-02/dist/index.html" target="_blank">
            <div class="image1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src="assets/instaSnip.png">
            </div>
          </a>
          <h3>Instanews</h3>
          <p>Web App Development</p>
        </div>
        <div class="experienceBlocks">
          <a href="vaughn-paulger-project-01/index.html" target="_blank">
            <div class="image1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src="assets/alohaSnip.png">
            </div>
          </a>
          <h3>Aloha Apparel</h3>
          <p>Web Development</p>
        </div>
        <div class="experienceBlocks">
          <a href="vaughn-paulger-project-03/pong-starter-master/index.html" target="_blank">
            <div class="image1">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img src="assets/pongSnip.png">
            </div>
          </a>  
          <h3>Pong Game</h3>
          <p>Web Game Development</p>
        </div>
      </div>
    </section>
  
    <section id="contactSection">
      <!-- <ul class="secondNavigation navigation">
        <li><a class="navLinks" id="about2">ABOUT</a></li>
        <li><a class="navLinks" id="experience2">EXPERIENCE</a></li>
        <li><a class="navLinks" id="contact2">CONTACT</a></li>
      </ul> -->
      <ul class="testNav">
        <li><a id="about2">About</a></li>
        <li><a id="experience2">Experience</a></li>
        <li><a id="contact2">Contact</a></li>
      </ul>
      <!-- Please contact me for any questions or inquiries. -->
      <div id="contactContainer">
        <p>SAY HELLO!</p>
        <form name="contactForm" action="./index.html" method="POST">
          <input class="contactInput" type="text" name="firstname" placeholder="First name">
          <br>
          <input class="contactInput" type="text" name="lastname" placeholder="Last name">
          <br>
          <input class="contactInput" type="text" name="phone" placeholder="Phone">
          <br>
          <input class="contactInput" type="text" name="email" placeholder="Email">
          <br>
          <textarea id="notesTextArea" class="contactInput" name="notes" placeholder="Notes"></textarea>
          <br>
          <input id="contactSubmitButton" type="submit" value="Get in touch">
        </form>
      </div>
    </section>
  </div>
  <footer>
    <!-- <i class="fab fa-linkedin"></i> -->
  </footer>
  

  <div id="wrap">
    <div id="viewport">
      <div class="tv">
        <div class="screen mute" id="tv"></div>
      </div>
    </div>
  </div>
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
  <script src="http://demo.web3designs.com/jquery-easing.min.js"></script>
  <script src="http://daneden.github.io/animate.css/animate.min.css"></script>
  <script src="dist/js/script.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
  <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
  <script type="text/javascript" src="slick/slick.min.js"></script>
				
</body>


</html> 