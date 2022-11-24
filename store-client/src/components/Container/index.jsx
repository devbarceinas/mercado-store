import './styles.scss'

const Container = ({children}) => {
  return (
    <section className='productsContainer'>
      <section>
        {children}
      </section>
    </section>
  )
}

export { Container }