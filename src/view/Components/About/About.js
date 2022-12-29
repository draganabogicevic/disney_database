import DipendencyCard from "../elements/DipendencyCard";

const About = () => {
  const dataToShow = [
    {
      title: "axios",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/axios",
      id: 1,
    },
    {
      title: "lodash-es",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/lodash-es",
      id: 2,
    },
    {
      title: "lodash-es",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/lodash-es",
      id: 3,
    },

    {
      title: "react",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react",
      id: 4,
    },
    {
      title: "react-dom",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-dom",
      id: 5,
    },
    {
      title: "react-icons",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-icons",
      id: 6,
    },
    {
      title: "react-redux",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-redux",
      id: 7,
    },
    {
      title: "react-scripts",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-scripts",
      id: 8,
    },
    {
      title: "redux",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/redux",
      id: 9,
    },
    {
      title: "styled-components",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/styled-components",
      id: 10,
    },
    {
      title: "web-vitals",
      subTitle: "Apache License 2.0",
      text: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/styled-components",
      id: 11,
    },
    {
      title: "react-router-dom",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-router-dom",
      id: 12,
    },
    {
      title: "Material-UI",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://mui.com/material-ui/getting-started/installation/",
      id: 13,
    },
  ];

  return (
    <div className="aboutWrapper">
      <div className="reportWrapper main">
        <h1>3rd-Party Software Report</h1>
        <p>
          The following sets forth attribution notices for third party software
          that may be contained in portions of this application. A huge THANKS
          to the open source community for all of their contributions
        </p>
      </div>
      {dataToShow.map((item) => (
        <DipendencyCard
          key={item.id}
          text={item.text}
          title={item.title}
          subTitle={item.subTitle}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default About;
