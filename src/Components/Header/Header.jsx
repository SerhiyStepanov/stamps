import s from "./header.module.css"


export default function Header() {

    return (
      <section>
        <div className={s.thumb}>
        <img src="stamp.svg" alt="post" className={s.stamp} />

        <h4 className={s.header}>Stamps of the world .</h4>

        <img src="stamp.svg" alt="post" className={s.stamp} />

        
      </div>

      <p className={s.text}>Good day. If you are interested in old postage stamps, you will be interested to look at my albums.
        These albums contain postage stamps of different countries and times. For those interested in buying, I provide telephone and email.
        Enjoy.</p>

        
      </section>
      
    )
}