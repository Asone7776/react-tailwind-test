import Testimonial, {TestimonialInterface} from "@widgets/testimonials/item";
import {testimonials_data} from "@utils/data.ts";

function Testimonials() {
    const handleClick = (data: TestimonialInterface) => {
        alert(JSON.stringify(data, null, 2));
    }
    const listItems = testimonials_data.map((item) => <Testimonial key={item.id} testimonial={item}
                                                                   onClick={() => handleClick(item)}/>)
    return (
        <div className='relative isolate bg-white'>
            <div className="md:max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {listItems}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;