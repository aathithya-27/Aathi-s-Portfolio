type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Aathithya P R",
    fullName: "Aathithya P R",
    email: "ironaathithya@gmail.com",
  },
  hero: {
    name: "Aathithya P R",
    p: ["Software Developer | UI/UX Enthusiast | OpenCV Explorer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: ` I'm a passionate software developer and VLSI engineering graduate with a strong foundation in programming and a drive to build innovative, real-world solutions. 
              With a background in Electronics and Communication Engineering (ECE), I specialize in creating applications that enhance user experiences and bridge the gap between hardware and software.
              My interests lie in chip design, system optimization, and visual data processing, along with front-end development and embedded systems programming.
              I bring creativity, curiosity, and a strong work ethic to every project, and I'm constantly exploring new technologies to stay ahead in the rapidly evolving tech landscape.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "",
      h2: "My Education.",
    },
    works: {
      p: "My works",
      h2: "Projects",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
