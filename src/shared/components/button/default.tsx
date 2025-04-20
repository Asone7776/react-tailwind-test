import {FC} from 'react'
import {Button} from '@headlessui/react';
import ButtonSpinner from "@shared/components/spinners/button-spinner.tsx";
import {ButtonTypes} from "@custom-types/enums.ts";


export interface DefaultButtonInterface {
    title?: string;
    loading?: boolean;
    disabled?: boolean;
    type?: ButtonTypes;
    onClick?: () => void;
}

const DefaultButton: FC<DefaultButtonInterface> = ({
                                                       title = 'Submit',
                                                       loading = false,
                                                       ...props
                                                   }) => {
    return (
        <Button
            {...props}
            className="cursor-pointer block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 relative min-h-10
            ">
            {loading ? (
                <ButtonSpinner/>
            ) : (
                title
            )}
        </Button>
    )
}

export default DefaultButton;