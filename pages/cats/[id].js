import {useRouter} from "next/router";
import Head from "next/head";


export default function Cat({data}) {
	const router = useRouter();
	const {id} = router.query;
	return (
		<>
		<Head>
			<title>{data.color} {data.id}</title>
		</Head>
		<h1>This is {data.id}</h1>
		<img src={data.image} alt="cat" width="300px" />
	</>)
}

export async function getServerSideProps({ params }) {
	const req = await fetch(`http://localhost:3000/api/${params.id}`);
	const data = req.json();
	return {
		props: { data },
	}
}

// export async function getStaticProps({params}) {
// 	const req = await fetch(`http://localhost:3000/${params.id}.json`);
// 	const data = await req.json();
// 	return {props: {cat: data}};
// }

// export async function getStaticPaths() {
// 	const req = await fetch("http://localhost:3000/cats.json");
// 	console.log(req);
// 	const data = await req.json();
//
// 	const paths = data.map(cat => {
// 		return {params: {id: cat}}
// 	});
// 	return {paths, fallback: false};
// }