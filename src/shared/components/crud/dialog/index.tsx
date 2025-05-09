import {memo, ReactNode} from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogClose,
    DialogHeader,
    DialogTitle,
} from "@shared/components/ui/dialog"
import {Button} from "@shared/components/ui/button.tsx";
import {useTranslation} from "react-i18next";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    children?: ReactNode;
}

function CrudDialog({open, children, onClose}: DialogProps) {
    const {t} = useTranslation();
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{t('create')}</DialogTitle>
                </DialogHeader>
                {children}
                <DialogFooter>
                    <DialogClose asChild={true}>
                        <Button className={'bg-primary'}>{t('close')}</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default memo(CrudDialog);