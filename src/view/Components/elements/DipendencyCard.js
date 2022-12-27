const DipendencyCard = ({ link, title, subTitle, text }) => {
  return (
    <div className="reportWrapper">
      <a href={link} target="_blank" className="link"  rel="noreferrer">
        <h1>{title}</h1>
      </a>
      {subTitle && <h3>{subTitle}</h3>}
      <p>{text}</p>
    </div>
  );
};

export default DipendencyCard;
