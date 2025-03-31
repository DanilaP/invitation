import * as React from 'react';
import { MdExitToApp } from "react-icons/md";
import { Button } from 'antd';
import './auth-pages.scss';

interface AuthLayoutProps {
    children: React.ReactElement | null
}

export default function AuthLayout (props: AuthLayoutProps) {

    const { children } = props;

    return (
        <div className='auth-wrapper'>
            <div className="auth-form">
                <div className="auth-form-header">
                    <MdExitToApp className='icon' color='primary' />
                </div>
                <div className="auth-form-content">{ children }</div>
                <div className="auth-form-footer">
                    <Button>Забыли пароль?</Button>
                </div>
            </div>
        </div>
    );
}