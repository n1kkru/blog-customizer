import { Text } from 'components/text';

import styles from './Button.module.scss';

type ButtonProps = {
	title: string;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onClick?(): void;
};

export const Button = ({ title, onClick, type }: ButtonProps) => {
	return (
		<button
			className={styles.button}
			type={type}
			onClick={(e) => {
				e.preventDefault();
				if (onClick) onClick();
			}}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
