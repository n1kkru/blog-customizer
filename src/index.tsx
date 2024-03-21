import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	/*стили сайта*/
	const [style, setStyle] = useState(defaultArticleState);
	/*состояние менюшки*/
	const [open, setOpen] = useState(false);
	/*ф-ция обновления состояния из компоненты формы*/
	const updState = (): void => {
		setOpen((op) => !op);
	};
	/*ф-ция обновления стилей страницы*/
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
