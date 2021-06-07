import s from "./footer.module.css"

export default function Footer() {
    return (
        <section className={s.wrapper}>
            <div className={s.thumb}>
                <b>Contact:</b>
                <a href="mailto:serhiystepanov@ukr.net" target="_blank" rel="noreferrer" className={s.link}>serhiystepanov@ukr.net</a>
            </div>
        </section>
    )
}