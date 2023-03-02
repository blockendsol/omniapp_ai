import Link from 'next/link';
import { useRouter } from 'next/router';
import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: ReactNode;
}

export default function NavLink({ href, children, ...rest }: NavLinkProps) {
	return (
		<Link href={href} passHref legacyBehavior>
			<a {...rest}>{children}</a>
		</Link>
	);
}
