import React from 'react';

import styles from './CustomButton.module.css';

const CustomButton = ({
	onClick,
	type = 'button',
	style,
	variant,
	disabled,
	className,
	children,
}) => {
	const handleChange = () => {
		onClick && onClick();
	};
	return (
		<button
			className={`${styles.button__container}  ${
				variant === 'primary' && styles.button__next
			} ${variant === 'secondary' && styles.button__secondary} 
			${variant === 'danger' && styles.button__danger}
      ${variant === 'disabled' && styles.button__disabled} ${className}`}
			style={{ ...style }}
			onClick={handleChange}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
export default CustomButton;
