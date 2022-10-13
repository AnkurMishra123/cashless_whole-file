import { apple,bill,google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionImgReverse}>
    {/* sectionImgreverse turns the tesx to place before the image when switching to the small devices . */}
    <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] 
        h-[100%] relative z-[5] " />

      <div className="absolue z-[3] -left-1/2 top-0 
      w-[50%] h-[50%] rounded-full white__gradient " /> 
      <div className="absolue z-[0] -left-1/2 bottom-0 
      w-[50%] h-[50%] rounded-full pink__gradient " /> 
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your 
      <br className="sm:block hidden"  />billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipicing 
        ultrices ametodio aenean neque. Fusce ipsum orci rhoncus
        aliporttitor integer platea placerat.
      </p>
{/* Code for the buttons of playstore and otherapp store */}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple_store" 
          className="w-[128px] h-[42px] object-contain mr-5 
          courser-pointer "/>

          <img src={google} alt="apple_store" 
          className="w-[128px] h-[42px] object-contain  
          courser-pointer "/>
      </div>
    </div>
  </section>
)

export default Billing