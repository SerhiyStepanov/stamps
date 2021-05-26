import countrys from "../../countrys.json"
import s from "./countryList.module.css"

export default function CountryList() {
    console.log(countrys)
    return (
        <section className={s.wrapper}>
            <ul className={s.thumb}>
                {countrys.map((el, index) => (
                    <li key={index} className={s.list}>
                        <a  href={el.url}
                  className={s.link}
                  target="_blank"
                            rel="nofollow">{ el["country "]}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}