import {memo, ReactNode} from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription
} from "@shared/components/ui/dialog"
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
            <DialogContent className={"max-w lg:max-w-screen-md overflow-y-scroll max-h-screen"}>
                <DialogHeader>
                    <DialogTitle>{t('create')}</DialogTitle>
                </DialogHeader>
                <DialogDescription/>
                {children}
            </DialogContent>
        </Dialog>
    );
}

export default memo(CrudDialog);