import React from 'react';
import styles from '../estyles.module.css';

/**La caratula del album */
const Cover = ({ children }: { children: any }) => {
	return <div className={styles.cover}>{children}</div>;
};

export default Cover;
