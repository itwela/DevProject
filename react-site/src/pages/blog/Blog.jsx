import Header from '../../components/Header/Header.jsx'
import StickyFooter from '../../components/footer/footer.jsx'


function Blog() {

    return (
      <>
      <Header/>
        <section className='blog-section
flex
bg-lightbrown
        '>
            <h1 className="blog-title
font-main
bold 
text-left
font-black
text-[18vw]
sm:text-[6em]
md:text-[7em]
lg:text-[8em]
leading-[0.75em]
text-darkbrown
text-shadow-custom
place-self-start
mt-[20%]
ml-[5%]            ">
                BLOG
            <p className="blog-title
font-main
bold 
text-left
font-black
text-lg
ml-[2%]
text-darkbrown
text-shadow-custom
            ">
                coming soon
            </p>
            </h1>
        </section>
        <StickyFooter/>
      </>
    )
  }
  
  export default Blog
  