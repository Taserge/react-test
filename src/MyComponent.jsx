import { useState } from "react"
import styles from './MyComponent.module.css'

// export const MyComponent = () => {
//     const [showRedText, setShowRedText] = useState(false)

//     const onClick = () => {
//         setShowRedText(!showRedText)
//     }
//     const text = <div className={showRedText ? styles.red : styles.white}>Текст</div>

//     return (
//         <>
//             {text}
//             <button onClick={onClick}>Изменить цвет текста</button>
//         </>)

// }



// obj1.a = 20 // мутация
// obj1 = { a: 20 } // изменение

export const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение')
    return promptValue
}

