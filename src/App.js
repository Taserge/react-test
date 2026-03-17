import styles from './App.module.css';
import { useState } from 'react';

export function App() {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')

	const isValueValid = value.length >= 3

	const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение')

	if (promptValue === null) {
		return
	}

	const trimmedValue = promptValue.trim()
	
	if(trimmedValue.length < 3) {
		return setError('Введенное значение должно содержать минимум 3 символа')
	}

	setError('')
	setValue(trimmedValue)

	console.log(trimmedValue)
	}

	const onAddButtonClick = () => {
		const id = Date.now()
		const updatedList = [...list, { id, value }]
		setList(updatedList)
		setValue('')
		setError('')
		console.log(updatedList)
	}

	return (
		<div className={styles.app}>
    		<h1 className={styles.pageHeading}>Ввод значения</h1>
    		<p className={styles.noMarginText}>
      			Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
    		</p>
    		{error !== '' && <div className={styles.error}>{error}</div>}
    		<div className={styles.buttonsContainer}>
      			<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
      			<button className={styles.button} disabled = {!isValueValid} onClick={onAddButtonClick}>Добавить в список</button>
    		</div>
    		<div className={styles.listContainer}>
      			<h2 className={styles.listHeading}>Список:</h2>
				{list.length > 0 ? (
					<ul className={styles.list}>
        			{list.map((item) => 
						(<li key={item.id} className={styles.listItem}>{item.value}</li>)
						)}
      				</ul>) :
      			(<p className={styles.noMarginText}>Нет добавленных элементов</p>)}
    		</div>
 		 </div>
	)
}