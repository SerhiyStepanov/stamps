import s from "./app.module.css";

export default function App() {
  return (
    <section className={s.wrapper}>
      <div className={s.thumb}>
        <svg className={s.icon}>
          <use href="stamp.svg"></use>
        </svg>
        <header className={s.header}>Stamps of different countries.</header>
      </div>
    </section>
  );
}
