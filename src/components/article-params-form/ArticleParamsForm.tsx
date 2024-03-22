import clsx from 'clsx';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { useRef, useState } from 'react';
import { Separator } from '../separator';
import { Text } from '../text';

import styles from './ArticleParamsForm.module.scss';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { useClose } from 'src/hooks/useClose';

type ArticleParamsProps = {
	onClick(): void;
	state: boolean;
	onChange(style: typeof defaultArticleState): void;
};

export const ArticleParamsForm = ({
	onClick,
	state,
	onChange,
}: ArticleParamsProps) => {
	/* обработчик нажатия на стрелку*/
	const handleArrowClick = (): void => {
		onClick();
	};

	/* кнопка применить*/
	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();
		onChange(style);
	};

	/* кнопка сбросить*/
	const handleReset = (e: React.FormEvent): void => {
		e.preventDefault();
		setStyle(defaultArticleState);
		onChange(defaultArticleState);
	};

	const [style, setStyle] = useState(defaultArticleState);
	const formRef = useRef<HTMLFormElement>(null);
	useClose({ isOpen: state, onClose: handleArrowClick, rootRef: formRef });

	return (
		<>
			<ArrowButton onClick={handleArrowClick} state={state} />

			<aside className={clsx(styles.container, state && styles.container_open)}>
				<form
					id='paramsForm'
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}
					ref={formRef}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>

					<Select
						title={'Шрифт'}
						selected={style.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(res) =>
							setStyle({
								...style,
								fontFamilyOption: res,
							})
						}
					/>
					<RadioGroup
						name={'fontSize'}
						title={'Размер Шрифта'}
						selected={style.fontSizeOption}
						options={fontSizeOptions}
						onChange={(res) =>
							setStyle({
								...style,
								fontSizeOption: res,
							})
						}
					/>

					<Select
						title={'Цвет Шрифта'}
						selected={style.fontColor}
						options={fontColors}
						onChange={(res) =>
							setStyle({
								...style,
								fontColor: res,
							})
						}
					/>

					<Separator />

					<Select
						title={'Цвет фона'}
						selected={style.backgroundColor}
						options={backgroundColors}
						onChange={(res) =>
							setStyle({
								...style,
								backgroundColor: res,
							})
						}
					/>

					<Select
						title={'Ширина контента'}
						selected={style.contentWidth}
						options={contentWidthArr}
						onChange={(res) =>
							setStyle({
								...style,
								contentWidth: res,
							})
						}
					/>

					<div className={styles.bottomContainer}>
						<Button form='paramsForm' title='Сбросить' type='reset' />
						<Button form='paramsForm' title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
