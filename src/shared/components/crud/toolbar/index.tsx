import {FC, memo} from 'react';
import {PlusIcon, ListFilterIcon, RefreshCwIcon} from "lucide-react";
import {Button} from "@shared/components/ui/button.tsx";
import TableSearch from "@shared/components/search/table-search.tsx";

interface CrudToolbar {
    hasSearch?: boolean;
    changeSearch: (value: string) => void;
}

const CrudToolbar: FC<CrudToolbar> = memo(({changeSearch}) => {
    return (

        <div className={'flex flex-col md:flex-row md:items-center gap-2 md:gap-4'}>
            <div className="flex gap-4">
                <Button variant={'secondary'} className={'ml-0 mr-auto hover:bg-primary hover:text-black'}>
                    <PlusIcon/>
                </Button>
                <Button variant={'secondary'} className={"hover:bg-primary hover:text-black"}>
                    <ListFilterIcon/>
                </Button>
                <div className={'md:hidden'}>
                    <Button variant={'secondary'} className={'hover:bg-primary hover:text-black'}>
                        <RefreshCwIcon/>
                    </Button>
                </div>
            </div>
            <div className={'w-full md:flex-1'}><TableSearch onChange={changeSearch}/></div>
            <div className={'hidden md:block'}>
                <Button variant={'secondary'} className={'hover:bg-primary hover:text-black'}>
                    <RefreshCwIcon/>
                </Button>
            </div>
        </div>
    );
})

export default CrudToolbar;