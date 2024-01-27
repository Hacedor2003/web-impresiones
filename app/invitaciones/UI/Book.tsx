import React from 'react';
import styles from '../estyles.module.css';

/**El Album */
const Book = ({ children }: { children: any }) => {
	return <div className={styles.book}>{children}</div>;
};

export default Book;
