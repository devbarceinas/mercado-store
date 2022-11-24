import './styles.scss'

const Categories = ({ typeCategories }) => {
  return (
    <section className='categoriesContainer'>
      {typeCategories?.map(categorie => (
        <p className="categorie" key={categorie?.id}>
          {categorie?.name}
        </p>
      ))}
    </section>
  )
}

export { Categories }