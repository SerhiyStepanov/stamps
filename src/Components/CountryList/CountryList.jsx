import countrys from "../../countrys.json"
import s from "./countryList.module.css"


const sortCountrys =  countrys.sort(function (a, b) {
  if (a.country > b.country) {
    return 1;
  }
  if (a.country < b.country) {
    return -1;
  }

  return 0;
});


export default function CountryList() {

    return (
        <section className={s.wrapper}>
            <ul className={s.thumb}>
                <h3 className={s.title}>Select a country.</h3>
                {sortCountrys.map((el, index) => (
                    <li key={index} className={s.list}>
                        <a href={el.url}
                            className={s.link}
                            target="_blank"
                            rel="nofollow">{el["country"]}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}