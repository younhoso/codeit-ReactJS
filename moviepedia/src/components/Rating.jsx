import styled from "styled-components";

const RATINGS = [1,2,3,4,5];

const Span = styled.span`
	color: ${props => props.selected ? 'yellowgreen' : 'slategray'};
`

function Star({value = 0, onSelect}){
	return (
		<div>
			{RATINGS.map((rating) => (
				<Span 
					key={rating} 
					selected={value >= rating} 
					rating={rating} 
					onSelect={onSelect}>
						*
					</Span>
			))}
		</div>
	)
}

function Rating({value}) {
	return (
		<div>
			<Star value={value}/>
		</div>
	)
}

export default Rating