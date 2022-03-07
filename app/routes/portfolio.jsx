import hollow from '../../public/images/hollow-hp.png'
import birdieLou from '../../public/images/birdie-lou-ctg.png'
import andyshop from '../../public/images/andyshop-pdp.png'

function Portfolio() {
  return (
    <div className='portfolio-ctn'>
      <h1>Portfolio</h1>
      <div className='project-card'>
        <div className='project-info'>
          <h2>The Hollow</h2>
          <p>
            An ecommerce site for a Montessori-inspired early learning center.
            Built with Shopify and custom Liquid elements.
          </p>
        </div>
        <a href='https://thehollowbk.org' rel='noreferrer' target='_blank'>
          <div className='project-img'>
            <img src={hollow} alt='' />
          </div>
        </a>
      </div>

      <div className='project-card'>
        <div className='project-info'>
          <h2>Birdie Lou</h2>
          <p>
            An ecommerce site for a childrens' wear. Built with Shopify and
            custom Liquid elements.
          </p>
        </div>
        <a href='https://birdie-lou.com' rel='noreferrer' target='blank'>
          <div className='project-img'>
            <img src={birdieLou} alt='' />
          </div>
        </a>
      </div>

      <div className='project-card'>
        <div className='project-info'>
          <h2>AndyShop</h2>
          <p>
            An ecommerce site designed to sell my own personal items. Built with
            React and Redux.
          </p>
        </div>
        <a
          href='https://andyshopapp.herokuapp.com'
          rel='noreferrer'
          target='blank'
        >
          <div className='project-img'>
            <img src={andyshop} alt='' />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
