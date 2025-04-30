import style from './card.module.css'

export const Card = ({ name, image }) => {
  return (
    <div className={style.cardContainer}>
      <h5 className={style.title}>{name}</h5>
      <img className={style.imgStyle} src={image} alt={`Imagem de ${name}`} />
    </div>
  )
}
