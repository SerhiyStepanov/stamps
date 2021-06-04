import Header from "./Components/Header";
import CountryList from "./Components/CountryList";
import s from "./app.module.css";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <section className={s.wrapper}>
        <Header />

        <CountryList />

        <Footer />
      </section>
    </>
  );
}
