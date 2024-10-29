import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'

function App() {

	const API_URL = import.meta.env.VITE_API_URL

	const [criptos, setCriptos] =	useState()

	useEffect(() => {
		axios.get(`${API_URL}/v2/assets`)
			.then(response => setCriptos(response.data.data))
	}, [])

	if (!criptos) {
		return <p>Cargando...</p>		
	} 

	return (
		<>
			<h1>Lista de cryptos</h1>

			<table>
				<tr>
					<th>Nombre</th>
					<th>Simbolo</th>
					<th>Precio</th>
				</tr>
				{ criptos.map(({id, name, symbol, priceUsd}) => (
					<tr key={id}>
						<td> {name}</td>
						<td>{symbol}</td>
						<td>{priceUsd}</td>
					</tr>
				))}					
			</table>
		</>
	)
}

export default App
