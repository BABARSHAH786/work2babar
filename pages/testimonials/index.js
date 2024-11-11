// data
import TestimonialSlider from "../../components/TestimonialSlider";
const testinomialSlider =() =>{
  return(
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center ">
        <h2 className="h2 relative xl:mt-[140px]">
          What clients <span className="text-accent">says</span>
        </h2>
        {/* slider */}
        <div>
        <TestimonialSlider />
        </div>
      </div>
    </div>
  )

}

export default testinomialSlider;
