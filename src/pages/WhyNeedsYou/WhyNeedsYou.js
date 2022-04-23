import React from 'react'
import Header from '../../components/Header/Header'
import DonateBanner from '../../components/DonateBanner/DonateBanner'
import SponserBanner from '../../sections/SponserBanner/SponserBanner'
import TagOptions from '../../sections/TagOptions/TagOptions'
import Footer from '../../components/Footer/Footer'
import WhyNeedsItem from '../../components/WhyNeedsItem/WhyNeedsItem'
import whyCover from '../../assets/images/why-cover@2x.png'
import { scrollToTop } from '../../utilities/scroll'



function WhyNeedsYou() {
  scrollToTop()

  return (
    <div>
         <Header/>
        <WhyNeedsItem tagName={`PURPOSE`}  heading={`why the sahel region needs you`} image={whyCover} headingTwo={`The standard Lorem Ipsum passage, used since the 1500s. Section 1.10.32 of “de Finibus Bonorum et Malorum”, written by Cicero in 45 BC`} paraOne={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`} paraTwo={`But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?`} quote={`The Sahel region is the most affected region in the world from climate change.`} />
        <SponserBanner/>
        <TagOptions/>
        <DonateBanner/>
        <Footer/>
    </div>
  )
}

export default WhyNeedsYou