import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ children, ...rest }: Props) {
    return(
        <button className={styles.button} {...rest} >
            {children}
            <PlusCircle size={16} weight='bold'/>
        </button>
    )
}