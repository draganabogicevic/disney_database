const About = () => {
  const dataToShow = [
    {
      title: "axios",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/axios",
    },
    {
      title: "lodash-es",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/lodash-es",
    },
    {
      title: "lodash-es",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/lodash-es",
    },

    {
      title: "react",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react",
    },
    {
      title: "react-dom",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-dom",
    },
    {
      title: "react-icons",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-icons",
    },
    {
      title: "react-redux",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-redux",
    },
    {
      title: "react-scripts",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-scripts",
    },
    {
      title: "redux",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/redux",
    },
    {
      title: "styled-components",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/styled-components",
    },
    {
      title: "web-vitals",
      subTitle: "Apache License 2.0",
      text: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/styled-components",
    },
    {
      title: "react-router-dom",
      subTitle: "MIT License",
      text: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.",
      link: "https://www.npmjs.com/package/react-router-dom",
    },
  ];

  return (
    <div className="aboutWrapper">
      <div className="reportWrapper">
        <h1>3rd-Party Software Report</h1>
        <p>
          The following sets forth attribution notices for third party software
          that may be contained in portions of this application. A huge THANKS
          to the open source community for all of their contributions
        </p>
      </div>
      {dataToShow.map((item) => (
        <div className="reportWrapper" key={item.title}>
          <a href={item.link} target="_blanck" className="link">
            <h1>{item.title}</h1>
          </a>
          {item.subTitle && <h3>{item.subTitle}</h3>}
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
