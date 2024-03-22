import { CSSProperties, useState } from 'react';

import { Article } from '../components/article/Article';
import { ArticleParamsForm } from '../components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../constants/articleProps';

import styles from './app.module.scss';
import clsx from 'clsx';

export const App = () => {
	const [style, setStyle] = useState(defaultArticleState);
	const [open, setOpen] = useState(false);

	const updState = (): void => {
		setOpen((op) => !op);
	};

	const updStyle = (value: typeof defaultArticleState): void => {
		setStyle(value);
	};

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': style.fontFamilyOption.value,
					'--font-size': style.fontSizeOption.value,
					'--font-color': style.fontColor.value,
					'--container-width': style.contentWidth.value,
					'--bg-color': style.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onClick={updState} state={open} onChange={updStyle} />
			<Article />
		</div>
	);
};
