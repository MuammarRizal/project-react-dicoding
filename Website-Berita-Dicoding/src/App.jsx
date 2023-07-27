import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <News />
      </div>
    </>
  );
}

function Button({ link }) {
  return <a href={link}>Find Out More</a>;
}

function CardHeader({ image, category }) {
  return (
    <header>
      <h4>{category}</h4>
      <img src={image} alt="" />
    </header>
  );
}

function CardBody({ date, title, content, link }) {
  return (
    <>
      <p>{date}</p>
      <h2>{title}</h2>
      <p>{content}</p>
      <Button link={link} />
    </>
  );
}

function Header({ title, subtittle }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p>{subtittle}</p>
      </header>
    </>
  );
}

function Card({ image, category, date, title, content, link }) {
  return (
    <article>
      <CardHeader image={image} category={category} />
      <CardBody date={date} title={title} content={content} link={link} />
    </article>
  );
}

function News() {
  // data news
  const someNews = [
    {
      title: "CNN Acuire BEME",
      date: "March 20 2022",
      content: "CNN purchased Casey Neistat's Beme app for $25million.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "React and the WP-API",
      date: "March 19 2022",
      content: "The first ever decoupled starter theme for React & the WP-API.",
      image: "https://source.unsplash.com/user/ilyapavlov/600x400",
      category: "News",
      link: "#",
    },
    {
      title: "Nomad Lifestyle",
      date: "March 19 2022",
      content: "Learn our tips and tricks on living a nomadic lifestyle.",
      image: "https://source.unsplash.com/user/erondu/600x400",
      category: "Travel",
      link: "#",
    },
  ];

  return (
    <div>
      <div>
        <Header title="Latest News" subtitle="Covering March & April 2022" />

        {someNews.map((e, i) => {
          return <Card {...e} key={i} />;
        })}
      </div>
    </div>
  );
}
export default App;
