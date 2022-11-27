import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import styles from './FormStyle.module.css'


export const FormErrorMessage= ({
	children,
}) => (
	<p
    className={styles.warning_msg}
	>
		{/* <WarningIcon  color={'#FF6666'} /> */}
		{children}
	</p>
);
