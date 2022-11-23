import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function CatsList(props) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Cars list
				</h1>

				<ul>
					<li>
						<Link href="/cats/snarky">Snarky</Link>
					</li>
					<li>
						<Link href="/cats/terry">Terry</Link>
					</li>
					<li>
						<Link href="/cats/lurky">Lurky</Link>
					</li>
				</ul>
			</main>
		</div>
	)
}