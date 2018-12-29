import * as React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
    to: string,
    children: any,
}

export const LinkComponent = ({ to, children } : LinkProps) => (
    <Link to={to} style={{textDecoration: 'none'}} >
        {children}
    </Link>
)