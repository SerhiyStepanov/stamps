import s from "./header.module.css"

export default function Header() {
    return (
        <div className={s.thumb}>
        <img src="stamp.svg" alt="post" className={s.stamp} />

        <header className={s.header}>Stamps of different countries.</header>

        <img src="stamp.svg" alt="post" className={s.stamp} />
      </div>
    )
}