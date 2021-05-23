import Stamp from "./image/stamp.svg";
import s from "./app.module.css";

export default function App() {
  return (
    <section className={s.wrapper}>
      <div className={s.thumb}>
        <header className={s.header}>
          <Stamp />
          Stamps of different countries.
        </header>
      </div>
    </section>
  );
}
