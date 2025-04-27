import {useState} from "react";
import {cn} from "@app/lib/utils"
import {Button} from "@shared/components/ui/button"
import {Input} from "@shared/components/ui/input"
import {Label} from "@shared/components/ui/label"
import {EyeIcon, EyeOff} from 'lucide-react';
import {ButtonClick, FormEvent} from "@custom-types/events.ts";
import {useNavigate} from "react-router";


function LoginForm({
                       className,
                       ...props
                   }: React.ComponentPropsWithoutRef<"form">) {

    const [passwordType, setPasswordType] = useState<string>('password');
    const navigate = useNavigate();
    const togglePassword = (event: ButtonClick) => {
        event.preventDefault();
        setPasswordType((value) => value === 'text' ? 'password' : 'text');
    }
    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        navigate('/admin');
    }

    return (
        <form className={cn("flex flex-col gap-6", className)} {...props} onSubmit={handleLogin}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Войдите в аккаунт</h1>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required/>
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Пароль</Label>
                    </div>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type={passwordType} placeholder="Пароль"/>
                        <Button onClick={togglePassword}>
                            {passwordType === 'password' ? <EyeOff/> : <EyeIcon/>}
                        </Button>
                    </div>
                </div>
                <Button type="submit" className="w-full">
                    Войти
                </Button>
            </div>
        </form>
    )
}

export default LoginForm;