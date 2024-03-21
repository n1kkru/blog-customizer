import clsx from 'clsx';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { useState } from 'react';
import { Separator } from '../separator';

import styles from './ArticleParamsForm.module.scss';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

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
	const handleApplyClick = (): void => {
		onChange(style);
	};

	/* кнопка сбросить*/
	const handleResetClick = (): void => {
		setStyle(defaultArticleState);
		onChange(defaultArticleState);
	};

	const [style, setStyle] = useState(defaultArticleState);

	return (
		<>
			<ArrowButton onClick={handleArrowClick} state={state} />

			<aside className={clsx(styles.container, state && styles.container_open)}>
				<form className={styles.form}>
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
						<Button title='Сбросить' type='reset' onClick={handleResetClick} />
						<Button
							title='Применить'
							type='submit'
							onClick={handleApplyClick}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
