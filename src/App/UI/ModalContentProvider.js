export default class ModalContentProvider {
  constructor() {
    this.modalContents = {
      aboutMe: {
        title: "About me",
        description: `Hello and welcome to my 3D minimalist portfolio! <br/>
        My name is Gabriel and I'm a fullstack Javascript developer.  <br/>
        Here at my portfolio you will find all kind of Javascript projects I have created, from frontend to backend, including this 3D website!
        `,
      },
      projects: {
        title: "Projects & Work",
        description: `
        <span>Work: </span> I've been at a frontend web developer role at Linkus, a freelancer recruiting website were I collaborated in the migration of the frontend to NextJs. <br/>
        <span>Personal Projects:</span> </br>
        <a href="https://teslo-store-gabriel.vercel.app/" target="_blank" >Teslo store (NextJs) </a> </br>
        <a href="https://www.linkedin.com/posts/gabriel-conte-grand-b5a386198_react-node-express-activity-6914192712359383040-5D7I/?utm_source=linkedin_share&utm_medium=member_desktop_web" target="_blank" >CalendarApp (MERN app) </a>   </br>
        <a href="https://melodic-snickerdoodle-a70369.netlify.app/" target="_blank" >Nexter (CSS Advanced)</a> 
        `,
      },
      contactMe: {
        title: "Contact Me",
        description: `
          Email:</br> gabrielcontegrand10@gmail.com  </br>
           
           <a href="https://melodic-snickerdoodle-a70369.netlify.app/" target="_blank">LinkedIn <a/> </br>
           <a href="https://github.com/Gabriel-Conte-Grand" target="_blank">Github <a/> </br>
           
          More info about me at my <a href="https://gabriel-conte-portfolio.netlify.app/" target="_blank">Standard Portfolio</a> </br>
          Thanks!
          `,
      },
    }
  }

  getModalInfo(portalName) {
    return this.modalContents[portalName]
  }
}
