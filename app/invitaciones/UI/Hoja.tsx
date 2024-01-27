import React from 'react';
import styles from '../estyles.module.css';

const Hoja = ({ children }: { children: string }) => {
	return <div className={styles.hoja}> {children}</div>;
};

export default Hoja;
