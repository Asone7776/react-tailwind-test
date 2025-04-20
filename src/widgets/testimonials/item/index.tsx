import {FC} from "react";
import {Button} from "@headlessui/react";

export interface TestimonialInterface {
    id: number;
    title: string;
    text?: string;
}

export interface TestimonialProps {
    testimonial: TestimonialInterface;
    onClick: () => void;
}

const Testimonial: FC<TestimonialProps> = ({testimonial, onClick}) => {
    return (
        <div
            className="group rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:p-10 lg:mx-0 transition-colors hover:bg-indigo-600 cursor-pointer">
            <h5 className="text-2xl font-bold text-indigo-600 group-hover:text-white line-clamp-1">{testimonial.title}</h5>
            {(testimonial?.text ?? (
                <p>{testimonial.text}</p>
            ))}
            <div className='mt-4'>
                <Button
                    className='block w-full bg-indigo-600 text-white p-2 rounded-md group-hover:text-indigo-600 group-hover:bg-white cursor-pointer active:bg-teal-300'
                    onClick={onClick}>Click me</Button>
            </div>
        </div>
    );
}

export default Testimonial;