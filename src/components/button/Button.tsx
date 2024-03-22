import { Text } from 'components/text';

import styles from './Button.module.scss';

type ButtonProps = {
	title: string;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
	onClick?(): void;
	form?: string;
};

export const Button = ({ title, type, form }: ButtonProps) => {
	return (
		<button form={form} className={styles.button} type={type}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
