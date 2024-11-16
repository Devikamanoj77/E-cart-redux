import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div style={{marginTop:'100px'}} className="  bg-violet-600 w-full text-white">
        <div className="grid grid-cols-4 gap-4">
        <div className='mt-8'>
          <Link className='text-2xl mx-5 ' to='/'><i className="fa-solid fa-truck-fast me-1"></i>Daily Cart</Link>
          <p className='mx-5'>Designed and Built with all the love in the world by <br />
          the Luminar team with the help of our <br />
          Contributors. <br />
          Code Licensed Luminar, docs CC BY 3.0 <br />
          Currently v5.3.2</p>

          </div>
          <div className='mx-24 mt-8'>
            <h2 className='fw-bolder text-lg'>Links</h2>
            <Link to='/home'>Home Page</Link> <br />
            <Link to='/wishlist'>wishlist Page</Link> <br />
            <Link to='/cart'>cart Page</Link>
          </div>
          <div className='mx-24 mt-8'>
            <h2 className='fw-bolder text-lg'>Guides</h2>
            <Link to='/home'>React </Link> <br />
            <Link to='/wishlist'>React Bootstrap</Link> <br />
            <Link to='/cart'>React Router</Link>
          </div>
          <div className='mx-24 mt-8 '>
            
              <h2 className='fw-bolder text-lg'>Contact Us</h2>
              <div className='flex'>
              <input className='rounded p-1' type="text" placeholder='Enter your e-mail here' />
              <button className='ml-3'><i class="fa-solid fa-arrow-right"></i></button>
              </div>
                
          </div>
        </div>
        <div className='text-center mt-5'>Copyright &copy; June 2024 Batch, E-cart.Built with React Redux</div>
      </div>
      
    </div>
  )
}

export default Footer