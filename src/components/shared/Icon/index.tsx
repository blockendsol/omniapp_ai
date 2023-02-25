import 'remixicon/fonts/remixicon.css';

export default function Icon({ icon, className }: { icon: string; className?: string }) {
	return <i className={`${icon} ${className} cursor-pointer`} />;
}
