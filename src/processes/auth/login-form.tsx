import {useState} from "react";
import {cn} from "@app/lib/utils"
import {Button} from "@shared/components/ui/button"
import {Input} from "@shared/components/ui/input"
import {Label} from "@shared/components/ui/label"
import {EyeIcon, EyeOff} from 'lucide-react';
import {ButtonClick} from "@custom-types/events.ts";
import ValidationAlert from "@shared/components/alert/validation";
import {useNavigate} from "react-router";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LoginSchema, LoginFormFields} from "@features/auth/login/model/validation.ts";
import {useTranslation} from "react-i18next";


function LoginForm({
                       className,
                       ...props
                   }: React.ComponentPropsWithoutRef<"form">) {

    const navigate = useNavigate();
    const {t} = useTranslation();
    const [passwordType, setPasswordType] = useState('password');
    const passwordIcon = passwordType === 'password' ? <EyeOff/> : <EyeIcon/>;

    const togglePassword = (event: ButtonClick) => {
        event.preventDefault();
        setPasswordType((value) => value === 'text' ? 'password' : 'text');
    }

    const handleLogin: SubmitHandler<LoginFormFields> = (data) => {
        console.log(data);
        navigate('/admin', {
            viewTransition: true
        });
    }

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormFields>({
        resolver: zodResolver(LoginSchema)
    });

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">{t('enter_account')}</h1>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">{t('fields.email')}</Label>
                    <Input {...register('email')} id="email"
                           placeholder="m@example.com"/>

                    {errors?.email?.message && <ValidationAlert>{errors.email.message}</ValidationAlert>}
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">{t('fields.password')}</Label>
                    </div>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input {...register('password')} type={passwordType} placeholder={t('fields.password')}/>
                        <Button onClick={togglePassword}>
                            {passwordIcon}
                        </Button>
                    </div>
                    {errors?.password?.message && <ValidationAlert>{errors.password.message}</ValidationAlert>}
                </div>
                <Button type="submit" className="w-full">
                    {t('enter')}
                </Button>
            </div>
        </form>
    )
}

export default LoginForm;