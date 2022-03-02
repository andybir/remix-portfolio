function Portfolio() {
  return (
    <div className='container'>
      <h1>Portfolio</h1>
      <div className='container'>
        <a href='https://thehollowbk.org' rel='noreferrer' target='_blank'>
          <h2>The Hollow</h2>
        </a>
        <p>
          An ecommerce site for a Montessori-inspired early learning center.
          Built with Shopify and custom Liquid elements.
        </p>
      </div>
      <div className='container'>
        <a href='https://birdie-lou.com' rel='noreferrer' target='blank'>
          <h2>Birdie Lou</h2>
        </a>
        <p>
          An ecommerce site for a childrens' wear. Built with Shopify and custom
          Liquid elements.
        </p>
      </div>
      <div className='container'>
        <a
          href='https://andyshopapp.herokuapp.com'
          rel='noreferrer'
          target='blank'
        >
          <h2>AndyShop</h2>
        </a>
        <p>
          An ecommerce site designed to sell my own personal items. Built with
          React and Redux.
        </p>
      </div>
    </div>
  )
}

export default Portfolio
