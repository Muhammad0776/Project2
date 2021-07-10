import './App.css';
import Card from "./Card"

const data = [
  {
    img: "https://img3.goodfon.ru/original/1920x1408/f/e8/beautiful-landscape-les.jpg",
    title: "БЕЛАЯ ВОРОНА",
    subtitle: "Лига сервер Россия-1- Страница 20 - Big Farm"
  },
  {
    img: "https://wallpaperscave.ru/images/original/18/01-16/earth-lake-10484.jpg",
    title: "Озеро скачать",
    subtitle: "Озеро скачать заставку на рабочий стол"
  },
  {
    img: "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701356348.jpg",
    title: "These 3D",
    subtitle: "These 3D images of nature are the best of"
  }
]

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">

          {
            data.map((value, index) => {

              return <div className="col-md-4">
                <Card
                  img={value.img}
                  title={value.title}
                  subtitle={value.subtitle}
                />
              </div>

            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
